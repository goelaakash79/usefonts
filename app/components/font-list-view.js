import { useState } from "react";
import FontCard from "./font-card-item";
import { Separator } from "@/components/ui/separator";
import { useFontLoader, createFontPreviewStyle } from "../../lib/font-loader";

const FontList = ({ fonts, allfonts, cardClick }) => {
	const [preFont, setPreFont] = useState("Geist");
	const { isLoaded: isPreFontLoaded } = useFontLoader(preFont);
	const preFontStyle = createFontPreviewStyle(preFont, isPreFontLoaded);

	const handleClick = font => {
		// console.log(font);
		setPreFont(font.family);
		cardClick(font);
	};

	return (
		<div className="overflow-y-scroll h-full w-full overflow-auto flex flex-col gap-0">

			{/* Font List */}
			{fonts &&
				fonts.map((font, index) => (
					<div className="inline-flex flex-col gap-0" key={`${font.family}-${index}`}>
						<FontCard
							font={font}
							onClick={handleClick}
							preFont={preFont}
						/>
						<Separator className="my-6" />
					</div>
				))}
		</div>
	);
};

export default FontList;
