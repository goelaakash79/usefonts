import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Text = styled.p`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const TextUtil = ({ font }) => {
	return (
		<>
			<p className="text-xs  font-bold text-colors-gray mb-4">HEADING</p>
			<Text
				family={(font && font.family) || "Sen"}
				className="text-5xl font-black text-colors-dark m-0 p-0 focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Explore the real experience.
			</Text>
			<div className="h-8"></div>
			<p className="text-xs  font-bold text-colors-gray mb-4">
				PARAGRAPH
			</p>
			<Text
				family={(font && font.family) || "Sen"}
				className="text-base text-blue-900 m-0 p-0 focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				We aim to automate and optimize your logistics operations with
				scalable and reliable technology solutions, to help boost
				business efficiency and align ourselves with your goals.
			</Text>
			<div className="h-8"></div>
		</>
	);
};

export default TextUtil;
