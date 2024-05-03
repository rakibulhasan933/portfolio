import Image from 'next/image'
import React from 'react'
import photo from '../../public/profile-photo.jpeg'

function About() {
	return (
		<section id='about' className='py-8 px-10'>
			<h2 className="md:text-[30px]  text-[20px] text-gray-300 py-6"><span className=" text-emerald-400 mr-3">01.</span>About</h2>
			<div className=" flex flex-row gap-x-3 text-gray-300">
				<div className="basis-2/3 pr-4">
					<h2 className=' text-gray-300 py-4 text-[24px]'><span className='mr-1  font-medium text-color-sub'>Rakibul Hasan</span>| Full-Stack Web Developer</h2>
					<p className="text-[18px] font-normal">I craft user-friendly and interactive web experiences with a passion for problem-solving.  My expertise in both front-end and back-end development allows me to bring websites to life, from design and functionality to data and security.  I enjoy collaborating with clients to translate their needs into powerful tools that help businesses thrive.  Always eager to learn and create, I&apos;m excited to tackle your next project !</p>
					<p className="text-[18px] font-normal">I possess expertise in various <span className=' font-medium text-color-sub'>framework</span> like <span className=' font-medium text-color-sub'>React.js(
						library), Next.js, Node.js, express.js, </span>etc.</p>
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