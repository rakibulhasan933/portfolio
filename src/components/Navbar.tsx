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
		<div className='md:px-[50px] px-4 md:h-[100px] h-[60px] flex flex-row items-center justify-between'>
			<div className=" text-color-text">
				<Link href="/">
					<Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src='/logo.png' alt='logo' width={50} height={50} className='' />
				</Link>
			</div>
			<div className="text-color-text md:flex items-center justify-between  hidden flex-row gap-x-12">
				<a href="#about" className=' hover:text-emerald-600'> <span className="text-emerald-400 mr-[2px]">1.</span> About</a>
				<a href="#experience" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">2.</span> Experience</a>
				<a href="#work" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">3.</span> Work</a>
				<a href="#contact" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">4.</span> Contact</a>
				<Button variant="outline" className=' text-[15px] bg-inherit hover:bg-color-sub border-2 hover:text-white hover:border-color-sub border-color-sub pb-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 text-color-sub'>Resume</Button>
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger className='text-white'><Menu size={50} className=' text-2xl' /> </SheetTrigger>
					<SheetContent side={"left"} className="w-[250px] sm:w-[250px] bg-color-main text-gray-200">
						<div className="py-8">
							<div className="flex items-center justify-between flex-col gap-y-6">
								<a href="#about" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">1.</span> About</a>
								<a href="#experience" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">2.</span> Experience</a>
								<a href="#work" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">3.</span> Work</a>
								<a href="#contact" className=' hover:text-emerald-600'><span className="text-emerald-400 mr-[2px]">4.</span>  Contact</a>
								<Button variant="outline" className=' text-[15px] bg-inherit hover:bg-emerald-400 border-2 hover:text-white hover:border-emerald-400 border-emerald-400 pb-1 text-emerald-400' asChild>
									<Link href={'https://drive.google.com/file/d/1JIXMMMMGNU9xdktwvHOJAI-dKak7ibc8/view'} >Resume</Link>
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>

		</div>
	)
}

export default Navbar