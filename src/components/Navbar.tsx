"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import AnimatedTabs from './ui/animated-tabs'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation';


function Navbar() {
	const pathname = usePathname();
	const tabs = [
		{
			title: "About",
			path: "/"
		},
		{
			title: "Services",
			path: "/services"
		},
		{
			title: "Projects",
			path: "/projects"
		},


	];
	return (
		<div className='md:mx-32 p-2'>
			<div className="text-color-text flex items-center justify-between flex-row gap-x-12">
				<div className=" text-color-text z-10">
					<Link href="/">
						<Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src='/logo.png' alt='logo' width={40} height={40} className='' />
					</Link>
				</div>
				<div className="flex md:hidden">
					<Sheet>
						<SheetTrigger><AlignJustify className='mr-4' size={30} /></SheetTrigger>
						<SheetContent className=' bg-inherit' side={"left"}>
							<div className="flex flex-col bg-inherit gap-y-4">
								{
									tabs.map((item, index) => (
										<Link key={index} href={`/${item.path}`} className={`text-[16px] text-white  mx-3 font-semibold hover:border-color-sub hover:text-color-sub  ${pathname === item.path ? "border-color-sub border-b-4 text-color-sub" : "border-white"}`}>
											{item?.title}
										</Link>
									))
								}
							</div>
						</SheetContent>
					</Sheet>
				</div>
				<div className="md:flex hidden relative h-full w-full items-center justify-center overflow-hidden rounded-lg px-10 py-4 z-10">
					<AnimatedTabs tabs={tabs} />
				</div>

				<Button variant="outline" className=' md:flex hidden z-10 text-[15px] bg-inherit hover:bg-color-sub border-2 hover:text-white hover:border-color-sub border-color-sub pb-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 text-white' asChild><Link href={'https://drive.google.com/file/d/1JIXMMMMGNU9xdktwvHOJAI-dKak7ibc8/view'} >Resume</Link></Button>
			</div>
		</div>
	)
}

export default Navbar