import React from "react";
import FontCard from "./FontCard";

const FontList = ({ fonts, allfonts, cardClick }) => {
	const handleClick = font => {
		cardClick(font);
	};
	return (
		<div className="overflow-y-scroll md:h-128 h-112">
			{fonts &&
				fonts.map(font => (
					<FontCard
						key={font.family}
						font={font}
						onClick={handleClick}
					/>
				))}
		</div>
	);
};

export default FontList;
