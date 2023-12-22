"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

function HeroContent() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className='flex flex-row items-center justify-center px-4 mt-20 w-full z-[20]'
		>
			<div className=' h-full w-full flex flex-col gap-2 justify-center m-auto text-start'>
				<motion.div
					variants={slideInFromTop}
					className='Welcome-box py-[7px] px-[4px] border boder-[#7042f88b] opacity-[0.9]'
				>
					<SparklesIcon className=' text-[#b49bff] mr-[10px] h-5 w-5' />
					<h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
				</motion.div>
				<motion.div
					variants={slideInFromLeft(0.5)}
					className='text-lg text-gray-400 my-5 max-w-[600px]'
				>
					I&apos;m a Full Stack Software Engineer with experience in Website,
					Mobile, and Software development. Check out my projects and skills.
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
				className="w-full h-full flex justify-center items-center"
			>
				<Image
					src="/mainIconsdark.svg"
					alt="work icons"
					height={650}
					width={650}
				/>
			</motion.div>
		</motion.div >
	)
}

export default HeroContent