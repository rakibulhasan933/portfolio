import Image from 'next/image'
import React from 'react'
import photo from '../../public/profile-photo.jpeg'

function About() {
	return (
		<section className='py-8 px-10'>
			<h2 className="md:text-[30px]  text-[20px] text-gray-300 py-6"><span className=" text-emerald-400 mr-3">01.</span>About</h2>
			<div className=" flex flex-row gap-x-3 text-gray-300">
				<div className="basis-2/3 pr-4">
					<p className="text-[18px] font-normal">Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
					<p className=" text-[18px] font-normal">Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
				</div>
				<div className="basis-1/3 relative group">
					<Image src={photo} className='transition delay-150 duration-300  group-hover:ease-in-out rounded-md absolute z-20 bottom-[20px] right-[20px]  group-hover:bottom-6  group-hover:right-6' placeholder='blur' alt='image' />
					<div className="w-[380px] transition delay-150 duration-300  group-hover:ease-in-out  group-hover:w-[380px]  group-hover:border-emerald-300 h-[340px] border-[3px] rounded-md border-color-sub" />
				</div>
			</div>
		</section>
	)
}

export default About