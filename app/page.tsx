import { Container } from "@/components/container";
import { SocialButton } from "@/components/ui/buttons";
import { homeSection1 } from "@/lib/data/home";
import { Gmail } from "@/lib/svg/gmail";
import { XformerlyTwitter } from "@/lib/svg/x";
import Image from "next/image";
import { WorkExperience } from "@/components/work-experience";

export default function Home() {
	return <Container gridOne={<HomeGridOne />} gridTwo={<HomeGridTwo />} />;
}

const HomeGridOne = () => {
	return (
		<div className="flex flex-col gap-10">
			<section className="flex flex-col">
				{homeSection1.map((item) => (
					<div
						key={item.title}
						className="grid grid-cols-3 lg:grid-cols-5 gap-2"
					>
						<h3 className="col-span-1 text-muted-foreground uppercase">
							{item.title}
						</h3>
						<span className="col-span-2 lg:col-span-3 font-sans">
							{item.value}
						</span>
					</div>
				))}
			</section>
			<section className="flex flex-col gap-4 lg:max-w-3/4">
				<div className="text-5xl font-sans font-semibold tracking-tight text-wrap">
					Method is a design studio that helps founder build world-class
					products, fast
				</div>
				<div className="flex gap-2.5 items-center w-full">
					<SocialButton>
						<XformerlyTwitter fill="#00000a" height={12} width={12} />
						<span>Twitter DM</span>
					</SocialButton>
					<span className="text-xs text-muted-foreground font-semibold">
						OR
					</span>
					<SocialButton>
						<Gmail fill="#00000a" height={12} width={12} />
						<span>Mail Me</span>
					</SocialButton>
				</div>
			</section>
			<section>
				<WorkExperience />
			</section>
		</div>
	);
};

const HomeGridTwo = () => {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-muted-foreground uppercase text-2xl font-medium">
				Selected works
				<span className="text-xs align-top pl-1.5">3</span>
			</h3>

			<div className="flex flex-col gap-4">
				{Array.from({ length: 3 }).map((_) => (
					<div className="flex flex-col gap-4">
						<Image
							src={
								"https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
							}
							alt="work"
							height={840}
							width={500}
							className="h-auto w-full lg:w-[max(min(100vw - 56px, 720px), 1px)] rounded-lg"
							sizes="(max-width: 720px) calc(100vw - 56px), 720px"
						/>
						<div className="">
							<h3 className="font-medium uppercase">Vesta</h3>
							<p className="text-muted-foreground font-sans">
								Product Design & Engineering
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
