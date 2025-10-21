"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
	
	// Connect links used in the third column
	const connectLinks = [
		// Include the icon property now
		{ label: "LinkedIn", link: "https://www.linkedin.com/in/harsha-s-0043a9327/", icon: <Linkedin size={16} /> },
		{ label: "GitHub", link: "https://github.com/harshasangur48", icon: <Github size={16} /> },
		{ label: "Email", link: "mailto:harshasangur048@gmail.com", icon: <Mail size={16} /> },
	];

	// Quick links used in the second column
	// Changed 'Projects' to link to the 'portfolio' ID
	const quickLinks = ['Home', 'About', 'Portfolio', 'Contact'];

	return (
		// Set white background and dark text, plus the neo-blue top border
		<footer className="py-12 px-4 bg-white text-gray-900 border-t-8 border-cyan-500">
			<div className="max-w-6xl mx-auto">
				
				{/* === THREE-COLUMN LAYOUT === */}
				<div className="grid md:grid-cols-3 gap-10 pb-10 text-center md:text-left border-b-2 border-gray-200">
					
					{/* 1. Harsha S (Bio) */}
					<div className="space-y-4">
						<h3 className="text-xl font-black text-gray-900">Harsha S</h3>
						<p className="text-sm text-gray-600">
							Computer Science student specializing in AI, ML, and Data Science.
						</p>
					</div>
					
					{/* 2. Quick Links */}
					<div className="space-y-4">
						<h3 className="text-xl font-black text-gray-900">Quick Links</h3>
						<div className="flex flex-col space-y-2 items-center md:items-start">
							{quickLinks.map((link, index) => (
								<a 
									key={index}
									// Use the correct section ID, converting link name to lowercase
									href={`#${link.toLowerCase() === 'projects' ? 'projects' : link.toLowerCase()}`} 
									className="text-sm text-gray-600 font-medium hover:text-cyan-500 transition-colors duration-300"
								>
									{/* Display Projects for better user readability */}
									{link === 'Portfolio' ? 'Projects' : link}
								</a>
							))}
						</div>
					</div>
					
					{/* 3. Connect (Now with Icons) */}
					<div className="space-y-4">
						<h3 className="text-xl font-black text-gray-900">Connect</h3>
						<div className="flex flex-col space-y-2 items-center md:items-start">
							{connectLinks.map((item, index) => (
								<a 
									key={index}
									href={item.link} 
									target="_blank" 
									rel="noopener noreferrer" 
									className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-cyan-500 transition-colors duration-300"
								>
									{item.icon}
									{item.label}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* === COPYRIGHT TEXT === */}
				<p className="text-sm text-gray-800 text-center pt-6">
					&copy; 2025 Harsha S. All rights reserved.
				</p>

			</div>
		</footer>
	);
}
