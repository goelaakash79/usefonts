import React from "react";
import FontCard from "./FontCard";

const FontList = ({ fonts, allfonts, cardClick }) => {
	// const [preFont, setPreFont] = React.useState(null);
	const handleClick = font => {
		cardClick(font);
	};
	return (
		<div className="overflow-y-scroll h-full overflow-auto flex flex-col gap-4">
			{/* <div className="overflow-y-scroll xl:h-160 lg:h-112 md:h-96 md:max-h-screen h-screen rounded-lg"> */}
			{/* // <div className="overflow-y-scroll lg:h-112 md:h-96 h-screen rounded-lg"> */}
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
