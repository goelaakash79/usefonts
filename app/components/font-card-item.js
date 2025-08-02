/**
 * Font Card Item Component
 * 
 * Individual font card that displays a font with preview text.
 * Uses React.memo for performance optimization and includes font loading states.
 * 
 * Features:
 * - Dynamic font loading and preview
 * - Performance optimization with React.memo
 * - Loading state indicators
 * - Click handling for font selection
 */

'use client'

import React from "react";
import { useFontLoader, createFontPreviewStyle } from "../../lib/font-loader";

const FontCard = React.memo(({ font, onClick }) => {
	// Load the actual font family for this card
	const { isLoaded, isLoading } = useFontLoader(font?.family);

	// Create style for the font name using the actual font family
	const fontNameStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<div
			className="cursor-pointer hover:text-primary rounded-lg transition-colors group"
			onClick={() => onClick(font)}
			data-font-family={font?.family}
		>
			<div
				className="text-2xl text-gray-800 font-medium font-['Geist'] tracking-tighter group-hover:text-gray-900 mb-1"
			>
				{font && font.family}
				<span className="text-xs px-2 py-1 rounded-sm bg-white/50 border border-gray-200 font-normal font-['Space_Mono'] uppercase text-gray-600 float-right tracking-tighter">
					{font && font.category}
				</span>
			</div>
			<div
				className="text-base text-slate-600 w-full tracking-tight"
				style={fontNameStyle}
			>
				Midnight rain painted the city streets, reflecting neon lights in shimmering puddles everywhere.
			</div>
			{isLoading && (
				<div className="text-xs text-gray-500 mt-1">
					Loading {font?.family}...
				</div>
			)}
		</div>
	);
}, (prevProps, nextProps) => {
	// Only re-render if the font family changes
	return prevProps.font?.family === nextProps.font?.family;
});

export default FontCard;
