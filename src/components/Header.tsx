import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

function Header() {
	return (
		<section>
			<div className='flex flex-col gap-y-4'>
				<div className="flex flex-col leading-[78px] gap-0">
					<p className=" text-emerald-400 font-mono text-[20px] font-normal">Hi, my name is</p>
					<h1 className="text-[#CCD6F6] text-[80px] font-bold">MD Rakibul Hasan.</h1>
					<h2 className="text-[#8892B0] text-[80px] font-bold">I build things for the web.</h2>
				</div>
				<p className=" text-[#B2BEDE] font-normal text-[18px] mb-4">I’m a software engineer specializing in building (and occasionally <br /> designing) exceptional digital experiences. Currently, I’m focused <br /> on building accessible, human-centered products. </p>
				<Button variant="outline" asChild className=' text-[15px] bg-inherit hover:bg-emerald-400 border-2 hover:text-white hover:border-emerald-400 border-emerald-400 pb-1 text-emerald-400  w-fit'>
					<Link href="https://www.linkedin.com/in/rakibulhossainrakib/">Hire me</Link>
				</Button>
			</div>
		</section>
	)
}

export default Header