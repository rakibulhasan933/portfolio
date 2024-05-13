"use client";
import React from 'react'
import SingleShortProject from './SingleShortProject'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';


export interface ShortIProps {
	id: string,
	name: string,
	github: string,
	live: string,
	description: string,
	package: string[],
}

const short: ShortIProps[] = [
	{
		id: "blog6",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	},
	{
		id: "blog5",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	},
	{
		id: "blog4",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	},
	{
		id: "blog3",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	},
	{
		id: "blog2",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	},
	{
		id: "blog1",
		name: "VPS host in Next.Js Project",
		github: "https://github.com/rakibulhasan933",
		live: "https://github.com/rakibulhasan933",
		description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
		package: ["TypeScript", "Next.js", "Sql", "AWS"]
	}
];

function AnimationCard(data: ShortIProps) {
	return <SingleShortProject data={data} />
};

function ShortProject() {
	return (
		<div id='work' className='md:py-8 py-4 md:px-10 px-2'>
			<h2 className=" text-gray-300 md:text-[38px] text-[24px] font-bold  text-center py-6">Other Noteworthy Projects</h2>
			{/* Short Projects */}
			<div id='all' className="grid md:grid-cols-3 grid-cols-1 items-center place-items-stretch gap-3">
				{
					short.map((item, index) => (
						<div id='blog' key={index}>
							{AnimationCard(item)}
						</div>
					))
				}
			</div>
		</div>
	)
}

export default ShortProject