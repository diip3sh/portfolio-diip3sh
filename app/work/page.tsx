"use client";

import { Container } from "@/components/container";

export default function Work() {
	return (
		<Container
			gridOne={<span>Grid 1</span>}
			gridTwo={
				<>
					{Array.from({ length: 100 }).map((_, index) => (
						<div key={index}>Content block {index + 1}</div>
					))}
				</>
			}
		/>
	);
}
