'use client'

import React from "react";
import { useFontLoader, createFontPreviewStyle } from "../../utils/fontLoader";

const UtilDiv = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<p className="text-xs font-bold text-gray mb-4">UTILITY DIV</p>
			<div className="bg-yellow p-6 rounded-lg" style={fontStyle}>
				<h3 className="text-xl font-bold text-black mb-2">
					Card Title
				</h3>
				<p className="text-gray mb-4">
					This is a sample card component that demonstrates how the font looks in a typical UI element.
				</p>
				<div className="flex justify-between items-center">
					<span className="text-sm text-gray">
						Last updated: 2 hours ago
					</span>
					<button className="bg-orange text-white px-4 py-2 rounded hover:bg-shadow transition-colors">
						Read More
					</button>
				</div>
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

export default UtilDiv;
