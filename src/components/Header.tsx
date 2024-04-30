import React from 'react'

function Header() {
	return (
		<div className='px-[150px] flex flex-col gap-y-4'>
			<div className="flex flex-col leading-[78px] gap-0">
				<p className=" text-emerald-400 font-mono text-[20px] font-normal">Hi, my name is</p>
				<h1 className="text-[#CCD6F6] text-[80px] font-bold">MD Rakibul Hasan.</h1>
				<h2 className="text-[#8892B0] text-[80px] font-bold">I build things for the web.</h2>
			</div>
			<p className=" text-[#B2BEDE] font-normal text-[18px]">I’m a software engineer specializing in building (and occasionally <br /> designing) exceptional digital experiences. Currently, I’m focused <br /> on building accessible, human-centered products. </p>
		</div>
	)
}

export default Header