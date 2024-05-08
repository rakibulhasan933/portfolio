import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

function Header() {
	return (
		<div className='md:mb-16 mb-4'>
			<div className='flex flex-col md:gap-y-4 gap-y-2'>
				<div className="flex flex-col md:leading-[78px] leading-relaxed gap-0">
					<p className=" text-emerald-400 font-mono md:text-[20px] text-[16px] font-normal">Hi, my name is</p>
					<h1 className="text-[#CCD6F6] md:text-[80px] text-[31px] font-bold">MD Rakibul Hasan.</h1>
					<h2 className="text-[#8892B0] md:text-[80px] text-[31px] font-bold">I build things for the web.</h2>
				</div>
				<p className=" text-[#B2BEDE] font-normal text-[18px]  mb-4">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused  on building accessible, human-centered products. </p>
				<Button variant="outline" asChild className=' bg-inherit hover:bg-emerald-400 border-2 hover:text-white hover:border-emerald-400 border-emerald-400  text-emerald-400  w-[120px] px-4 pt-3 text-[18px]'>
					<Link href="https://www.linkedin.com/in/rakibulhossainrakib/">Hire me</Link>
				</Button>
			</div>
		</div>
	)
}

export default Header