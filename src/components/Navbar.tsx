import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


function Navbar() {
	return (
		<div className='px-[50px] h-[100px] flex flex-row items-center justify-between'>
			<div className=" text-color-text">
				<Link href="/">
					<Image src='/logo.png' alt='logo' width={50} height={50} className='' />
				</Link>
			</div>
			<div className="text-color-text flex items-center justify-between flex-row gap-x-12">
				<a href="#about" className=' hover:text-emerald-600'>About</a>
				<a href="#experience" className=' hover:text-emerald-600'>Experience</a>
				<a href="#work" className=' hover:text-emerald-600'>Work</a>
				<a href="#contact" className=' hover:text-emerald-600'>Contact</a>
				<Button variant="outline" className=' text-[15px] bg-inherit border-2 hover:text-emerald-500 hover:border-white border-emerald-400'>Resume</Button>
			</div>
		</div>
	)
}

export default Navbar