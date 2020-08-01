import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Div = styled.div`
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

const UtilDiv = ({ font }) => {
	return (
		<>
			<p className="text-xs font-bold text-colors-gray mb-4">ALERT</p>
			<Div
				family={(font && font.family) || "Sen"}
				className="bg-colors-light border-l-4 border-colors-orange rounded-md w-full lg:w-1/2 text-colors-dark px-4 py-3 shadow-xs focus:outline-none"
				role="alert"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				<div className="flex">
					<div className="py-1">
						<svg
							className="fill-current h-6 w-6 text-colors-orange mr-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
						</svg>
					</div>
					<div>
						<p className="font-bold">Notification</p>
						<p className="text-sm">
							Please check your due payment and respond
							accordingly.
						</p>
					</div>
				</div>
			</Div>
			<div className="h-8"></div>
			<p className="text-xs font-bold text-colors-gray mb-4">CARD</p>
			<Div
				className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-xs bg-colors-light focus:outline-none"
				family={(font && font.family) || "Sen"}
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				<img
					className="w-full h-32"
					src="https://i.imgur.com/z2UlZu4.jpg"
					alt="..."
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						The Coldest Sunset
					</div>
					<p className="text-colors-dark text-sm">
						It happens too often that we end up trying a few fonts
						before starting with a new project. To help designers
						and developers, I created a tool called "useFonts".
					</p>
				</div>
			</Div>
			<div className="h-8"></div>
		</>
	);
};

export default UtilDiv;
