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
					console.log("wait");
				}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const FontCard = ({ font, onClick }) => {
	return (
		<div
			className="bg-white rounded-lg mb-4 py-3 px-4 cursor-pointer"
			onClick={() => onClick(font)}
		>
			<h2 className="text-base text-blue-900 font-sen font-bold mb-2">
				{font && font.family}
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
