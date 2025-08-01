'use client'

import React from "react";
import { useFontLoader, createFontPreviewStyle } from "../utils/fontLoader";

const FontCard = ({ font, onClick }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<div
			className="bg-yellow rounded-lg mb-3 py-3 px-6 cursor-pointer border-b-4 border-transparent hover:border-shadow hover:border-b-4 transition-all duration-200"
			onClick={() => onClick(font)}
		>
			<h2 className="text-base text-blue-900 font-display font-bold mb-1">
				{font && font.family}
				<span className="text-xs px-2 rounded py-px bg-light font-medium text-white float-right">
					{font && font.category}
				</span>
			</h2>
			<p
				style={fontStyle}
				className="text-sm text-gray-700 w-full"
			>
				A ship in the harbor is safe, but that is not what a ship is
				for.
			</p>
			{isLoading && (
				<div className="text-xs text-gray mt-1">
					Loading font...
				</div>
			)}
		</div>
	);
};

export default FontCard;
