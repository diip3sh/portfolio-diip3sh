export type GithubContribution = {
  date: string;
  count: number;
  level: number;
};

type GithubContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export type GithubContributionsResponse = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: Array<{
          contributionDays: Array<{
            date: string;
            contributionCount: number;
            contributionLevel: GithubContributionLevel;
          }>;
        }>;
      };
    };
  };
};

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

async function fetchGithubContributions(): Promise<GithubContribution[]> {
  try {
    // Check if GitHub token is available
    if (!process.env.GITHUB_TOKEN) {
      console.warn(
        "GitHub token not found. Please set GITHUB_TOKEN environment variable.",
      );
      return [];
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    };

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { username: "diip3sh" },
      }),
      next: { revalidate: 86400 }, // 24 hours
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GitHub API error: ${response.status}`, errorText);

      if (response.status === 403) {
        throw new Error(
          "GitHub API rate limit exceeded or invalid token. Please check your GITHUB_TOKEN.",
        );
      }

      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data: { data: GithubContributionsResponse } = await response.json();

    if (!data.data?.user?.contributionsCollection) {
      throw new Error("User not found or no contribution data available");
    }

    const contributions: GithubContribution[] = [];

    const contributionLevelMap: Record<GithubContributionLevel, number> = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    data.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
      (week) => {
        week.contributionDays.forEach((day) => {
          // Include all days, even those with 0 contributions
          const normalizedLevel =
            contributionLevelMap[day.contributionLevel] ?? 0;

          contributions.push({
            date: day.date,
            count: day.contributionCount,
            level: normalizedLevel,
          });
        });
      },
    );

    return contributions;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    // Return empty array as fallback
    return [];
  }
}

export async function getGithubContributions(): Promise<GithubContribution[]> {
  return await fetchGithubContributions();
}
