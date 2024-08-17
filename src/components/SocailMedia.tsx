import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Linkedin, PhoneCall } from 'lucide-react';
import React from 'react';

const SocialMedia = () => {
    return (
        <div className='app_social top-2FIX absolute mt-[50vh] cursor-pointer hidden lg:block'>
            <div className='relative'>
                <a href='https://www.linkedin.com/in/rakibulhossainrakib/'
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[36px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <Linkedin className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></Linkedin>

                </a>
                <a href='https://wa.me/8801793874052'
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[88px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <PhoneCall className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></PhoneCall>

                </a>
                <a href="mailto:rakibulmd933@gmail.com"
                    className="flex flex-row gap-2 px-4 items-center h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white absolute top-[140px] -left-24 hover:left-0 group"
                >
                    <p className='w-full mr-10 text-sm whitespace-nowrap'>Contact me</p>
                    <EnvelopeOpenIcon className='text-xl ml-24 absolute h-12 transition-all duration-200 text-zinc-400 hover:text-black group-hover:dark:text-white '></EnvelopeOpenIcon>

                </a>
            </div>

        </div>
    );
};

export default SocialMedia;