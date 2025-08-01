'use client'

import React, { useState } from "react";
import { useFontLoader, createFontPreviewStyle } from "../../lib/font-loader";

const FontCard = ({ font, onClick }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<div
			className="bg-white rounded-lg p-6 border-1 border-b-4 border-b-transparent border-gray-100 cursor-pointer hover:border-primary hover:border-b-4 shadow-xs transition-all duration-200"
			onClick={() => onClick(font)}
		>
			<h2 className="text-base text-blue-900 font-display font-bold mb-1">
				{font && font.family}
				<span className="text-xs px-2 py-1 rounded-sm bg-white border-1 border-primary/50 font-normal font-['Space_Mono'] uppercase text-primary float-right tracking-tighter">
					{font && font.category}
				</span>
			</h2>
			<p
				style={fontStyle}
				className="text-sm text-gray-700 w-full"
			>
				When metrics are missing, let happiness be your guide.
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
