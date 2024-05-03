import React from 'react'

function About() {
	return (
		<section className='flex py-8 px-10'>
			<div className="basis-1/2 gap-x-8 ">
				<h2 className="md:text-[30px]  text-[20px] text-gray-300"><span className=" text-emerald-400 mr-3">01.</span>About</h2>
				<hr className='w-full  text-gray-300 rounded py-3' />
				<div className="basis-1/2 flex flex-col gap-y-4 text-gray-400">
					<p className=" text-[18px] font-normal">Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
					<p className=" text-[18px] font-normal">Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
				</div>
				<div className="basis-1/2"></div>
			</div>
		</section>
	)
}

export default About