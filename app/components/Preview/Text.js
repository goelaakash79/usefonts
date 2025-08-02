'use client'

import React, { useState } from "react";
import { useFontLoader, createFontPreviewStyle } from "../../../lib/font-loader";

const TextUtil = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<div className="flex flex-col gap-2">
				<div className="text-sm font-normal text-gray font-['Space_Mono'] uppercase tracking-tighter">HEADING</div>
				<div
					style={fontStyle}
					className="text-7xl font-semibold text-gray-800 m-0 p-0 focus:outline-none tracking-tighter"
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					Build beautiful products, effortlesly.
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="text-sm font-normal text-gray  font-['Space_Mono'] uppercase tracking-tighter">PARAGRAPH</div>
				<div
					style={fontStyle}
					className="text-lg text-gray-600 m-0 p-0 focus:outline-none tracking-tight leading-snug"
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					This is not a component library. It is how you build your component library.<br /><br />

					You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.<br /><br />

					This approach works well until you need to customize a component to fit your design system or require one that isn’t included in the library. Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.<br /><br />

					You can’t just install a package and use it. You have to build it.

					You have to build it.

					You have to build it.

					You have to build it.
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

export default TextUtil;
