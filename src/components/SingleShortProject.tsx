"use client"
import { ExternalLink, Folder, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ShortIProps } from './ShortProject'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

function SingleShortProject({ data }: { data: ShortIProps }) {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(`#${data.id}-body`, {
			scrollTrigger: {
				trigger: `#${data.id}-body`,
				toggleActions: "restart none none none",
			}, opacity: 0, duration: 2,
		});

	});
	return (
		<Link id={`${data.id}-body`} href={data.live}>
			<div className="bg-[#112240] rounded group flex flex-col justify-between gap-y-4 px-4 py-6">
				<div className=" flex flex-row justify-between items-center">
					<Link href={data.live}><Folder className='text-emerald-400' /></Link>
					<div className=" text-gray-400 flex flex-row items-center gap-x-2">
						<Link href={data.github}><Github className=' hover:text-emerald-400' /></Link>
						<Link href={data.live}><ExternalLink className=' hover:text-emerald-400' /></Link>
					</div>
				</div>
				<h2 className=" text-[24px] text-gray-300 group-hover:text-emerald-400 font-semibold">{data.name} </h2>
				<p className=" text-[16px] font-normal text-gray-400">{data.description}</p>
				<ul className=' flex flex-row gap-x-3 text-[15px] font-normal  items-center text-gray-400'>
					{
						data.package.map((item, index) => <li key={index}>{item}</li>)
					}
				</ul>
			</div>
		</Link>
	)
}

export default SingleShortProject