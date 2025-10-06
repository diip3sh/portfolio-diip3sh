import { siteMetadata } from "@/app/data/siteMetadata";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const fetchCache = "force-no-store";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get the query parameters
    const title = searchParams.get("title") || "Portfolio";
    const summary = searchParams.get("summary") || "";
    const imageName = searchParams.get("image") || "";

    const isDevelopment = process.env.NODE_ENV === "development";
    const baseUrl = isDevelopment
      ? "http://localhost:3000"
      : siteMetadata.siteUrl;

    const imageUrl = imageName ? `${baseUrl}/${imageName}` : "";

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "blue",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "left",
            position: "relative",
          }}
        >
          <img
            tw="absolute inset-0 -z-10"
            src={imageUrl}
            alt="portfolio background image"
          />
          <img
            tw="absolute inset-0 -z-10"
            src={`${baseUrl}/braydoncoyer_og_overlay.png`}
            alt="Gradient overlay"
          />

          <h1 tw="absolute -bottom-12 left-0 pl-22 w-full text-white text-6xl leading-tight max-w-4xl">
            {title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
