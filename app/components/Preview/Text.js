'use client'

import React, { useState } from "react";
import { useFontLoader, createFontPreviewStyle } from "../../../lib/font-loader";

const TextUtil = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<p className="text-xs font-bold text-gray mb-4">HEADING</p>
			<p
				style={fontStyle}
				className="text-5xl font-black text-dark m-0 p-0 focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Explore the real experience.
			</p>
			<div className="h-8"></div>
			<p className="text-xs font-bold text-gray mb-4">
				PARAGRAPH
			</p>
			<p
				style={fontStyle}
				className="text-base text-blue-900 m-0 p-0 focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				We aim to automate and optimize your logistics operations with
				scalable and reliable technology solutions, to help boost
				business efficiency and align ourselves with your goals.
			</p>
			{isLoading && (
				<div className="text-xs text-gray mt-2">
					Loading font...
				</div>
			)}
			<div className="h-8"></div>
		</>
	);
};

export default TextUtil;
