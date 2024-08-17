"use client";
import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import { TextGenerateEffect } from './ui/text-generate-effect';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NumericCounter from './ui/numeric-counter';

function About() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from("#sub", {
			scrollTrigger: {
				trigger: "#sub",
				toggleActions: "restart none none none",
			},
			y: 150, scale: 1.8, duration: 1.5, opacity: 1
		},);
		gsap.fromTo("#image", {
			scrollTrigger: {
				trigger: "#image",
				toggleActions: "restart none none none",

			}, y: 30, x: 30, scale: 1, duration: 1,
		}, {
			scrollTrigger: {
				trigger: "#image",
				toggleActions: "restart none none none",

			}, y: 0, x: 0, scale: 1, duration: 1
		});
	});

	return (
		<div id='about' className='py-8 md:py-10 md:px-10 px-2'>
			<h2 className="md:text-[30px]  flex flex-row text-[20px] text-gray-300 py-4"><span className=" text-emerald-400 z-10 mr-3"></span><TextGenerateEffect className='z-10' words='About' /> </h2>
			<div className=" flex md:flex-row flex-col gap-x-3 md:gap-1 gap-y-10 items-center text-gray-300">
				<div className="basis-2/3  px-2">
					<h2 id='sub' className=' text-gray-300 pb-[2px] z-10 text-[24px] leading-loose'><span className='mr-1 md:inline block  font-medium text-color-sub'>Rakibul Hasan</span>| Full-Stack Web Developer</h2>
					<TextGenerateEffect className="text-[18px] z-10 font-normal opacity-80" words='I craft user-friendly and interactive web experiences with a passion for problem-solving.  My expertise in both front-end and back-end development allows me to bring websites to life, from design and functionality to data and security.  I enjoy collaborating with clients to translate their needs into powerful tools that help businesses thrive.  Always eager to learn and create, I&apos;m excited to tackle your next project !' />
					<h3 className="text-[18px] font-normal py-2 opacity-80">Here are a few technologies I’ve been working with recently:-</h3>
					<ul className='text-gray-300 z-10 grid grid-cols-2 opacity-80'>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />JavaScript(ES6+)</li>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />TypeScript</li>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />React.js</li>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />Next.js</li>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />Node.js</li>
						<li className='flex flex-row gap-x-1'> <ChevronRight size={16} strokeWidth={4} className=' text-emerald-400' />Docker</li>
					</ul>
				</div>
				<div className="basis-1/3 relative group">
					<Image id='image' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/profile-photo.jpeg" width={340} height={280} className='transition z-10 duration-200  group-hover:ease-in-out rounded-md absolute z-20 bottom-[12px] right-[14px]  group-hover:bottom-[20px]  group-hover:right-[20px]' alt='image' />
					<div id='image-box' className="w-[320px] transition  duration-200  group-hover:ease-in-out  group-hover:w-[320px]  group-hover:border-emerald-300 z-10 h-[280px] border-[3px] rounded-md border-color-sub" />
				</div>
			</div>
			<div className="my-20 p-3 flex flex-col md:flex-row justify-around gap-3 z-10">
				<div className=" basis-1/3 border-[2px] rounded-sm border-dashed p-2  text-center">
					<h3 className="text-xl text-white font-medium">Completed Projects</h3>
					<h4 className="text-lg text-color-text">20+</h4>
				</div>
				<div className=" basis-1/3 border-[2px] rounded-sm border-dashed p-2  text-center">
					<h3 className="text-xl text-white font-medium">Completed Projects</h3>
					<h4 className="text-lg text-color-text">20+</h4>
				</div>
				<div className=" basis-1/3 border-[2px] rounded-sm border-dashed p-2  text-center">
					<h3 className="text-xl text-white font-medium">Completed Projects</h3>
					<h4 className="text-lg text-color-text">20+</h4>
				</div>
			</div>
		</div>
	)
}

export default About