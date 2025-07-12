"use client";
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BorderBeam } from './ui/border-beam';

interface ProjectIProps {
	id: string,
	name: string,
	photoUrl: string,
	description: string,
	package: string[],
	gitHub: string,
	live: string,
}

const project: ProjectIProps[] = [
	{
		id: "arafat",
		name: "Arafat Foundation LTD.",
		photoUrl: "/project-1.png",
		description: "Arafat Foundation is a non-political, non-profit organization dedicated to humanitarian services. It follows the teachings of Prophet Muhammad (PBUH) to aid humanity, reform society, create employment, alleviate poverty, and provide education and healthcare. The foundation aims to build an ideal welfare society through various charity and social welfare activities.",
		package: ["Typescript", "Next.js", "Node.js", "Mongodb", "Prisma"],
		gitHub: "",
		live: "https://arafatfoundation.org"
	},
	{
		id: "arafat1",
		name: "Free Plan Tour.",
		photoUrl: "https://i.ibb.co/9yqZTJ8/Screenshot-2024-07-15-182540.png",
		description: "FreePlanTour offers free guided tours led by local experts in various cities. Travelers can explore destinations, learn about history and culture, and pay tips based on satisfaction. This approach aims to make travel accessible and enriching.",
		package: ["Javascript", "Next.js", "Node.js", "Firebase", "Auth0"],
		gitHub: "",
		live: "https://www.freeplantour.com/en"
	},
	{
		id: "arafat2",
		name: "HealthZenix.",
		photoUrl: "https://i.ibb.co/wNx66SXJ/Screenshot-129.png",
		description: "An AI-powered healthcare platform designed to analyze symptoms, provide accurate disease predictions, and generate smart prescription suggestions, enhancing medical decision-makingthrough intelligent automation.",
		package: ["Typescript", "Next.js", "Redux", "Mongodb", "Shadcn UI"],
		gitHub: "",
		live: "https://healthzenix.vercel.app"
	},
	{
		id: "arafat3",
		name: "Hunger Station.",
		photoUrl: "https://i.ibb.co/5WcJmtjX/Screenshot-130.png",
		description: "A food delivery web app showcasing a dynamic and mobile-friendly UI. Users can explore food items by category, add them to a cart, and simulate placing an order.",
		package: ["Typescript", "Next.js", "Node.js", "Mongodb", "Redux"],
		gitHub: "",
		live: "https://hungerstation.vercel.app"
	},

];

function SingleProject({ data, index }: { data: ProjectIProps, index: number }) {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(`#${data.id}-heading`, {
			scrollTrigger: {
				trigger: `#${data.id}-heading`,
				toggleActions: "restart none none none",

			}, y: 100, scale: 1.2, opacity: 0, duration: 1.2
		});
	});
	return <div className="py-4 flex md:flex-row flex-col md:gap-x-1 gap-y-4">
		<div className=" md:basis-3/5 z-10 w-full">
			<Link href={data.live} >
				<Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={data.photoUrl} className='rounded  hover:text-orange-900  object-cover' width={580} height={362} alt={data.name} />
			</Link>
		</div>
		<div className="relative md:basis-2/5 w-full z-10 flex flex-col justify-between">
			<div className="py-2">
				<h2 className=" flex text-color-sub text-[15px] font-mono font-medium py-1 justify-end">Featured Project</h2>
				<h2 id={`${data.id}-heading`} className="flex text-gray-300 text-[28px] justify-end font-semibold py-1">{data.name}</h2>
			</div>
			<div className=" relative flex justify-end md:px-4 px-2 py-2 items-center bg-[#112240] md:ml-[-60px] rounded">
				<p className=' text-[#A8B2D1] pt-3 font-normal'>{data.description}</p>
				<BorderBeam size={200} duration={20} delay={15} />
			</div>
			<div className="py-2 flex flex-col gap-y-2">
				<ul className=' text-color-sub text-[14px] md:text-[16px]  flex flex-row gap-x-2 justify-end'>
					{
						data.package.map((item, index) => <li key={index}>{item}</li>)
					}
				</ul>
				<div className=" text-white flex flex-row gap-x-4 justify-end px-2">
					<Link href={data.gitHub}><Github className=' hover:text-emerald-400' /></Link>
					<Link href={data.live}><ExternalLink className=' hover:text-emerald-400' /></Link>
				</div>
			</div>
		</div>
	</div>
}

function Project() {

	return (
		<div id='project' className='md:py-8 py-4 md:px-10 px-2'>
			<h2 className="md:text-[30px] flex flex-row  text-[20px] text-gray-300 py-4"><span className=" text-emerald-400 z-10 mr-3"></span> <TextGenerateEffect words='Some Things I’ve Built' /> </h2>
			{/* Project List */}
			<div className="flex flex-col gap-4">
				{
					project.map((data, index) => <SingleProject key={index} data={data} index={index} />)
				}
			</div>
		</div>
	)
}

export default Project