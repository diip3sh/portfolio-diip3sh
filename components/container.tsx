"use client";

import React from "react";

type ContainerType = {
	gridOne: React.ReactNode;
	gridTwo: React.ReactNode;
};

export const Container = ({ gridOne, gridTwo }: ContainerType) => {
	return (
		<div className="relative grid grid-cols-1 xl:grid-cols-2">
			<section className="p-6 xl:sticky xl:h-fit xl:top-0">{gridOne}</section>
			<section className="p-6 overflow-y-auto max-h-full">
				<div className="space-y-6">{gridTwo}</div>
			</section>
		</div>
	);
};
