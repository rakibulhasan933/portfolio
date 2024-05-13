import React from 'react'
import { ContactFrom } from './ContactFrom'

function Contact() {
	return (
		<div id='contact' className='md:py-8 py-4 md:px-10 px-2'>
			<div className="">
				<p className="text-[16px] text-emerald-400 font-mono font-normal text-center py-5">What’s Next?</p>
				<h2 className=" md:text-[60px] text-[40px] text-center font-bold text-gray-300 pb-1">Get In Touch</h2>
				<p className="text-center text-[18px] font-normal text-gray-300 py-4 md:px-40">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
			</div>
			<div className="flex  justify-center items-center gap-1">
				<div className=" md:w-2/3 w-full bg-[#112240] p-3 rounded-md">
					<ContactFrom />
				</div>
			</div>
		</div>
	)
}

export default Contact