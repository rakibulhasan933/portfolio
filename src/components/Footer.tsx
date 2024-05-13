"use client";
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Footer() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from("#footer", {
			scrollTrigger: {
				trigger: "#footer",
				toggleActions: "restart none none none",

			}, y: 0, scale: 2, opacity: 0, duration: 1
		});
	});
	return (
		<p id='footer' className="text-center py-2 text-gray-300 text-[15px]  hover:text-emerald-400">
			{new Date().getFullYear()} &copy;  Designed & Built by Rakibul Hasan
		</p>
	)
}

export default Footer