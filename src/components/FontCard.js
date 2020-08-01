import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Paragraph = styled.p`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {
					/* console.log("wait"); */
				}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const FontCard = ({ font, onClick }) => {
	return (
		<div
			className="bg-colors-yellow rounded-lg mb-3 py-3 px-6 cursor-pointer border-b-4 border-transparent hover:border-colors-shadow hover:border-b-4 transition-all duration-200"
			onClick={() => onClick(font)}
		>
			<h2 className="text-base text-blue-900 font-sen font-bold mb-1">
				{font && font.family}
				<span className="text-xs px-2 rounded py-px bg-colors-light font-medium text-white float-right">
					{font && font.category}
				</span>
			</h2>
			<Paragraph
				family={font && font.family}
				className="text-sm text-gray-700 w-full"
			>
				A ship in the harbor is safe, but that is not what a ship is
				for.
			</Paragraph>
		</div>
	);
};

export default FontCard;
