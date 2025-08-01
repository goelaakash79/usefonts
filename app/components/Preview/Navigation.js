'use client'

import React, { useState } from "react";
import { useFontLoader, createFontPreviewStyle } from "../../../lib/font-loader";

const Navigation = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<p className="text-xs font-bold text-gray mb-4">
				NAVIGATION
			</p>
			<div style={fontStyle}>
				<nav className="flex items-center justify-between flex-wrap bg-orange py-6 px-10 -mx-10">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="font-bold text-2xl">usefonts</span>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div className="w-full md:block flex-grow lg:flex lg:items-center lg:w-auto hidden">
						<div className="text-sm lg:flex-grow">
							<a
								href="https://tailwindcss.com/"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							>
								Home
							</a>
							<a
								href="https://refactoringui.com/"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							>
								About
							</a>
							<a
								href="https://dsckiet.com/"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							>
								Team
							</a>
							<a
								href="https://twitter.com/goelaakash79"
								className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
							>
								Contact
							</a>
						</div>
						<div>
							<a
								href="https://github.com/goelaakash79"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
							>
								Become a member
							</a>
						</div>
					</div>
				</nav>
			</div>
			{isLoading && (
				<div className="text-xs text-gray mt-2">
					Loading font...
				</div>
			)}
			<div className="h-8"></div>
		</>
	);
};

export default Navigation;
