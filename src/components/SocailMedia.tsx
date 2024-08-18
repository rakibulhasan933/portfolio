import { Facebook, Mail, Twitter } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { BorderBeam } from './ui/border-beam';

const SocialMedia = () => {
    return (
        <div className='fixed mt-[40vh] cursor-pointer md:block'>
            <div className='hover:relative text-white '>
                <Link href='https://www.facebook.com/mdrakibulhasan.rakib6'
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-200  hover:text-white absolute top-[36px] -left-24 hover:left-0 group z-50"
                >
                    <p className='w-full mr-10 text-white text-sm whitespace-nowrap'>Contact me</p>
                    <Facebook className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-blue-500 group-hover:text-white ' />
                    <BorderBeam size={100} duration={20} delay={10} />

                </Link>
                <Link href='https://twitter.com/rakibul_hasan80'
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400  hover:text-white absolute top-[88px] -left-24 hover:left-0 group z-50"
                >
                    <p className='w-full mr-10 text-white text-sm whitespace-nowrap'>Contact me</p>
                    <Twitter className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-blue-900 group-hover:text-white ' />
                    <BorderBeam size={100} duration={20} delay={15} />
                </Link>
                <Link href="mailto:rakibulmd933@gmail.com"
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400  hover:text-white absolute top-[140px] -left-24 hover:left-0 group z-50"
                >
                    <p className='w-full mr-10 text-white text-sm whitespace-nowrap'>Contact me</p>
                    <Mail className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 group-hover:text-white ' />
                    <BorderBeam size={100} duration={20} delay={20} />
                </Link>
            </div>

        </div>
    );
};

export default SocialMedia;