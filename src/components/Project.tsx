import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project() {
	return (
		<section id='project' className='md:py-8 py-4 md:px-10 px-2'>
			<h2 className="md:text-[30px]  text-[20px] text-gray-300 py-4"><span className=" text-emerald-400 mr-3">03.</span>Some Things I’ve Built</h2>
			{/* Project List */}
			<div className="flex flex-col gap-4">
				{
					Array.from({ length: 3 }).map((_, index) => (
						<div key={index} className="py-4 flex md:flex-row flex-col md:gap-x-1 gap-y-4">
							<div className="md:basis-3/5 w-full">
								<Link href="https://arafatfoundation.org" className=''>
									<Image src="/project-1.png" className='rounded hover:text-orange-900  object-cover' width={580} height={362} alt='project' />
								</Link>
							</div>
							<div className="md:basis-2/5 w-full flex flex-col justify-between">
								<div className="py-2">
									<h2 className=" flex text-color-sub text-[15px] font-mono font-medium py-1 justify-end">Featured Project</h2>
									<h2 className=" flex text-gray-300 text-[28px] justify-end font-semibold py-1">Arafat Foundation LTD.</h2>
								</div>
								<div className="flex justify-end md:px-4 py-4 bg-[#112240] md:ml-[-60px] rounded">
									<p className=' text-[#A8B2D1] font-normal'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
								</div>
								<div className="py-2 pl-1 flex flex-col gap-y-2">
									<ul className=' text-color-sub  flex flex-row gap-x-1 justify-end'>
										<li>Typescript</li>
										<li>Next.js</li>
										<li>Node.js</li>
										<li>Mongodb</li>
										<li>Prisma</li>
									</ul>
									<div className=" text-white flex flex-row gap-x-4 justify-end px-2">
										<Link href="https://arafatfoundation.org"><Github className=' hover:text-emerald-400' /></Link>
										<Link href="https://arafatfoundation.org"><ExternalLink className=' hover:text-emerald-400' /></Link>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Project