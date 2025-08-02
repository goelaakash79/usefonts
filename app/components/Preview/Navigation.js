'use client'

import React, { useState } from "react";
import { useFontLoader, createFontPreviewStyle } from "../../../lib/font-loader";
import Lottie from "lottie-react";
import logoAnimation from "@/public/assets/logo.json";
import { Button } from "@/components/ui/button";

const Navigation = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<div className="flex flex-col gap-2">
				<div className="text-sm font-normal text-gray font-['Space_Mono'] uppercase tracking-tighter">navigation</div>
				<div style={fontStyle}>
					<nav className="inline-flex items-center w-full justify-start bg-neutral-100 border border-gray-200 py-2 pr-2 pl-6 rounded-full shadow-sm">
						<div className="flex-1 text-white">
							<Lottie animationData={logoAnimation} loop={true} className="w-12 h-12" />
						</div>

						<div className="w-full inline-flex justify-center items-center text-base tracking-tighter text-gray-700 gap-6">

							<a
								href="https://tailwindcss.com/"
							>
								Home
							</a>
							<a
								href="https://refactoringui.com/"
							>
								Projects
							</a>
							<a
								href="https://dsckiet.com/"
							>
								Team
							</a>

							<a
								href="https://dsckiet.com/"
							>
								About
							</a>

						</div>
						<div className="float-right">
							<Button className="rounded-full h-10">Become a member</Button>
						</div>
					</nav>
				</div>
			</div>
			{isLoading && (
				<div className="text-xs text-gray mt-2">
					Loading font...
				</div>
			)}
		</>
	);
};

export default Navigation;
