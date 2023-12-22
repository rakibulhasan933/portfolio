"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

function HeroContent() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className='flex flex-row items-center justify-center px-4 w-full z-[20]'
		>
			<div className='flex flex-col justify-around w-full h-full gap-2 basis-1/2 text-start'>
				<motion.div
					variants={slideInFromLeft(0.5)}
					className='text-2xl font-semibold text-gray-400 my-5 max-w-[600px]'
				>
					Hi, I&apos;m
					<br />
					<span className="text-2xl font-bold uppercase md:text-5xl">Rakibul Hasan <br /> Rakib</span>
				</motion.div>
				<motion.a
					variants={slideInFromLeft(1)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
				>
					Learn More!
				</motion.a>
			</div>
			<motion.div
				variants={slideInFromRight(0.8)}
				className="flex items-center justify-center w-full h-full basis-1/2"
			>
				<Image
					src="/mainIconsdark.svg"
					alt="work icons"
					height={300}
					width={400}
				/>
			</motion.div>
		</motion.div >
	)
}

export default HeroContent