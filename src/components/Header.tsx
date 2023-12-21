import Image from 'next/image'
import React from 'react'

function Header() {
	return (
		<div className='flex mx-10 max-w-[1366px] justify-between items-center h-full'>
			<h1 className="">Rakibul Hasan</h1>
			<div className="flex justify-between gap-2">
				<Image src="/facebook.svg" width={30} height={30} alt='icon'></Image>
				<Image src="/instagram.svg" width={30} height={30} alt='icon'></Image>
			</div>
		</div>
	)
}

export default Header