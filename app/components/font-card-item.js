'use client'

import { useFontLoader, createFontPreviewStyle } from "../../lib/font-loader";

const FontCard = ({ font, onClick, preFont }) => {
	console.log(font)
	// Load the actual font family for this card
	const { isLoaded, isLoading } = useFontLoader(font?.family);

	// Create style for the preview text using the selected preFont
	const previewStyle = createFontPreviewStyle(preFont, true); // Always show preFont when selected

	// Create style for the font name using the actual font family
	const fontNameStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<div
			className="cursor-pointer hover:text-primary rounded-lg transition-colors group"
			onClick={() => onClick(font)}
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
				className="text-base text-slate-600 w-full tracking-tight font-['Geist']"
			// style={previewStyle}
			>
				When metrics are missing, let happiness be your guide.
			</div>
			{isLoading && (
				<div className="text-xs text-gray-500 mt-1">
					Loading {font?.family}...
				</div>
			)}
		</div>
	);
};

export default FontCard;
