/**
 * Preview Panel Component
 * 
 * Main preview area that displays selected font in various UI contexts.
 * Shows font previews, navigation, text samples, forms, and cards.
 * 
 * Features:
 * - Font preview in multiple UI contexts
 * - Google Fonts integration link
 * - Mobile responsive design
 * - Loading states and empty states
 */

'use client'

import React from "react";
import TextUtil from "./Preview/Text";
import Navigation from "./Preview/Navigation";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "@geist-ui/icons";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { SectionCards } from "@/components/section-cards";

const PreviewCard = ({ font, onClose }) => {
	const previewText = "A ship in the harbor is safe, but that is not what a ship is for."
		.split(" ")
		.join("+");

	// Check if no font is selected
	const isFontSelected = Object.keys(font).length > 0;

	return (
		<div className="bg-white overflow-y-scroll h-screen py-12 px-10">
			<span
				onClick={() => {
					onClose();
				}}
				className="cursor-pointer right-0 px-6 absolute md:hidden block"
			>
				<svg viewBox="0 0 384 384" xmlSpace="preserve" height="20">
					<circle cx={192} cy={192} r={176} fill="#E9C46A" />
					<g fill="#012e52">
						<path d="M368 176c-8.832 0-16 7.168-16 16 0 88.224-71.776 160-160 160S32 280.224 32 192 103.776 32 192 32c42.944 0 83.264 16.792 113.528 47.272 6.216 6.264 16.344 6.304 22.624.08 6.272-6.224 6.304-16.352.08-22.632C291.92 20.144 243.536 0 192 0 86.128 0 0 86.128 0 192s86.128 192 192 192c105.864 0 192-86.128 192-192 0-8.832-7.168-16-16-16z" />
						<path d="M251.312 132.688c-6.248-6.248-16.376-6.248-22.624 0L192 169.376l-36.688-36.688c-6.24-6.248-16.384-6.248-22.624 0-6.248 6.248-6.248 16.376 0 22.624L169.376 192l-36.688 36.688c-6.248 6.248-6.248 16.376 0 22.624C135.808 254.44 139.904 256 144 256s8.192-1.56 11.312-4.688L192 214.624l36.688 36.688C231.816 254.44 235.904 256 240 256s8.184-1.56 11.312-4.688c6.248-6.248 6.248-16.376 0-22.624L214.624 192l36.688-36.688c6.248-6.248 6.248-16.376 0-22.624z" />
					</g>
				</svg>
			</span>

			{!isFontSelected ? (
				<div className="flex items-center justify-center h-full">
					<div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
					<div className="text-center">
						<div className="text-2xl font-medium font-['Geist'] text-gray-600 mb-2 tracking-tighter">
							Select a font to start
						</div>
						<div className="text-sm font-['Geist'] text-gray-400 tracking-tighter">
							Choose a font from the left panel to preview it here
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="inline-flex flex-col gap-4 w-full">
						<div className="font-medium font-['Geist'] text-6xl text-gray-800 tracking-tighter">
							{font.family}{" "}
						</div>
						<div className="w-full inline-flex gap-4 justify-between items-center">
							<span className="text-sm px-2 py-1 rounded-sm bg-white/50 border border-gray-200 font-normal font-['Space_Mono'] uppercase text-gray-600 tracking-tighter">
								{font.category}
							</span>{" "}
							<Link
								href={`https://fonts.google.com/specimen/${font.family
									.split(" ")
									.join(
										"+"
									)}?preview.text=${previewText}&preview.text_type=custom`}
								rel="noopener noreferrer"
								target="_blank"
								className="text-primary font-medium text-md font-['Geist'] hover:text-primary tracking-tight"
							>
								<div className="inline-flex gap-1 items-center">
									<div className="leading-none">Google fonts</div>
									<ArrowUpRight color="#525DC0" size={16} />
								</div>
							</Link>
						</div>
					</div>
					<Separator className="my-8" />
					<div className="flex flex-col gap-8">
						<Navigation font={font} />
						<TextUtil font={font} />
						<LoginForm font={font} />
						<SectionCards font={font} />
					</div>
				</>
			)}
		</div>
	);
};

export default PreviewCard;
