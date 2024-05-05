import { ExternalLink, Folder, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ShortProject() {
	return (
		<section id='short_project' className='md:py-8 py-4 md:px-10 px-2'>
			<h2 className=" text-gray-300 text-[30px] font-bold  text-center py-6">Other Noteworthy Projects</h2>
			{/* Short Projects */}
			<div className="grid md:grid-cols-3 grid-cols-1 items-center place-items-stretch gap-3">
				{
					Array.from({ length: 6 }).map((_, index) => (
						<Link key={index} href="/">
							<div className="bg-[#112240] rounded group flex flex-col justify-between gap-y-4 px-4 py-6">
								<div className=" flex flex-row justify-between items-center">
									<Link href="/"><Folder className='text-emerald-400' /></Link>
									<div className=" text-gray-400 flex flex-row items-center gap-x-2">
										<Link href="https://arafatfoundation.org"><Github className=' hover:text-emerald-400' /></Link>
										<Link href="https://arafatfoundation.org"><ExternalLink className=' hover:text-emerald-400' /></Link>
									</div>
								</div>
								<h2 className=" text-[24px] text-gray-300 group-hover:text-emerald-400 font-semibold">Time to Have More Fun</h2>
								<p className=" text-[16px] font-normal text-gray-400">A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
								<ul className=' flex flex-row gap-x-3 text-[15px] font-normal  items-center text-gray-400'>
									<li>Next.js</li>
									<li>Tailwind css</li>
									<li>MongoDB</li>
									<li>Vercel</li>
								</ul>
							</div>
						</Link>
					))
				}
			</div>
		</section>
	)
}

export default ShortProject