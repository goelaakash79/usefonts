'use client'

import React from "react";
import { useFontLoader, createFontPreviewStyle } from "../../utils/fontLoader";

const Buttons = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<p className="text-xs font-bold text-gray mb-4">BUTTONS</p>
			<div className="flex flex-wrap gap-4" style={fontStyle}>
				<button
					className="bg-orange hover:bg-shadow text-white font-bold py-2 px-4 rounded"
				>
					Primary Button
				</button>
				<button
					className="bg-yellow hover:bg-shadow text-black font-bold py-2 px-4 rounded"
				>
					Secondary Button
				</button>
				<button
					className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4 border border-orange hover:border-transparent rounded"
				>
					Outline Button
				</button>
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

export default Buttons;
