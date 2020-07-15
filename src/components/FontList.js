import React from "react";
import FontCard from "./FontCard";

const FontList = ({ fonts, allfonts, cardClick }) => {
	const handleScroll = () => {
		console.log(window.document.getElementById("scroll-pos").scrollHeight);
	};
	const handleClick = font => {
		cardClick(font);
	};
	return (
		<div className="overflow-y-scroll h-screen" onScroll={handleScroll}>
			{fonts &&
				fonts.map(font => (
					<FontCard
						key={font.family}
						font={font}
						onClick={handleClick}
					/>
				))}
			<div className="h-56" id="scroll-pos"></div>
		</div>
	);
};

export default FontList;
