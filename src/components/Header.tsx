import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

function Header() {
	return (
		<section>
			<div className='flex flex-col md:gap-y-4 gap-y-2'>
				<div className="flex flex-col md:leading-[78px] leading-relaxed gap-0">
					<p className=" text-emerald-400 font-mono md:text-[20px] text-[16px] font-normal">Hi, my name is</p>
					<h1 className="text-[#CCD6F6] md:text-[80px] text-[24px] font-bold">MD Rakibul Hasan.</h1>
					<h2 className="text-[#8892B0] md:text-[80px] text-[24px] font-bold">I build things for the web.</h2>
				</div>
				<p className=" text-[#B2BEDE] font-normal md:text-[18px] text-[14px] mb-4">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused  on building accessible, human-centered products. </p>
				<Button variant="outline" asChild className=' text-[15px] bg-inherit hover:bg-emerald-400 border-2 hover:text-white hover:border-emerald-400 border-emerald-400 pb-1 text-emerald-400  w-fit'>
					<Link href="https://www.linkedin.com/in/rakibulhossainrakib/">Hire me</Link>
				</Button>
			</div>
		</section>
	)
}

export default Header