import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Button = styled.button`
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

const Buttons = ({ font }) => {
	return (
		<>
			<p className="text-xs  font-bold text-colors-gray mb-4">BUTTON</p>
			<Button
				family={(font && font.family) || "Sen"}
				className="text-base font-bold text-colors-white m-0 px-8 py-2 bg-colors-orange rounded-lg border-none mr-4 mb-2 lg:mb-0 focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Sign in with Google
			</Button>{" "}
			<Button
				family={(font && font.family) || "Sen"}
				className="text-base font-bold text-colors-orange m-0 px-8 py-2 bg-colors-white border border-colors-orange rounded-lg focus:outline-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Click to continue
			</Button>
			<div className="h-8"></div>
		</>
	);
};

export default Buttons;
