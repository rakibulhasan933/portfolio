import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project() {
	return (
		<section id='project' className='md:py-8 py-4 md:px-10 px-2'>
			<h2 className="md:text-[30px]  text-[20px] text-gray-300 py-4"><span className=" text-emerald-400 mr-3">03.</span>Some Things I’ve Built</h2>
			<div className="py-4 flex flex-row gap-x-1">
				<div className="basis-3/5">
					<Link href="https://arafatfoundation.org" className=''>
						<Image src="/project-1.png" className='rounded hover:text-orange-900  object-cover' width={580} height={362} alt='project' />
					</Link>
				</div>
				<div className="basis-2/5 flex flex-col justify-between relative">
					<div className="py-2">
						<h2 className=" flex text-color-sub text-[15px] font-mono font-medium py-1 justify-end">Featured Project</h2>
						<h2 className=" flex text-gray-300 text-[28px] justify-end font-semibold py-1">Arafat Foundation LTD.</h2>
					</div>
					<div className="flex justify-end px-4 py-8 bg-[#112240] ml-[-60px] rounded z-20">
						<p className=' text-[#A8B2D1] font-normal'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
					</div>
					<div className="py-2 pl-2 flex flex-col gap-y-3">
						<ul className=' text-color-sub  flex flex-row gap-x-4 justify-end'>
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
		</section>
	)
}

export default Project