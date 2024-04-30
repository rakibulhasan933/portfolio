import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';



function Navbar() {
	return (
		<div className='px-[50px] h-[100px] flex flex-row items-center justify-between'>
			<div className=" text-color-text">
				<Link href="/">
					<Image src='/logo.png' alt='logo' width={50} height={50} className='' />
				</Link>
			</div>
			<div className="text-color-text md:flex items-center justify-between  hidden flex-row gap-x-12">
				<a href="#about" className=' hover:text-emerald-600'>About</a>
				<a href="#experience" className=' hover:text-emerald-600'>Experience</a>
				<a href="#work" className=' hover:text-emerald-600'>Work</a>
				<a href="#contact" className=' hover:text-emerald-600'>Contact</a>
				<Button variant="outline" className=' text-[15px] bg-inherit border-2 hover:text-emerald-500 hover:border-white border-emerald-400'>Resume</Button>
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger className='text-white'><Menu size={50} className=' text-2xl' /> </SheetTrigger>
					<SheetContent side={"left"} className="w-[250px] sm:w-[250px]">
						<div className="py-8">
							<div className="flex items-center justify-between flex-col gap-y-6">
								<a href="#about" className=' hover:text-emerald-600'>About</a>
								<a href="#experience" className=' hover:text-emerald-600'>Experience</a>
								<a href="#work" className=' hover:text-emerald-600'>Work</a>
								<a href="#contact" className=' hover:text-emerald-600'>Contact</a>
								<Button variant="outline" className=' text-[15px] bg-inherit border-2 hover:text-emerald-500 hover:border-white border-emerald-400'>Resume</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>

		</div>
	)
}

export default Navbar