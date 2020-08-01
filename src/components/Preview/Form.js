import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Input = styled.input`
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

const Label = styled.label`
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
const Form = ({ font }) => {
	return (
		<>
			<p className="text-xs font-bold text-colors-gray mb-4">INPUT</p>
			<div className="flex flex-col md:flex-row ">
				<div className="flex flex-col w-full md:w-1/2">
					<Label
						family={(font && font.family) || "Sen"}
						className="text-sm font-medium text-colors-gray mb-2"
					>
						Enter your email
					</Label>

					<Input
						family={(font && font.family) || "Sen"}
						type="text"
						placeholder="john.doe@noobs.com"
						className="border-colors-orange bg-colors-light border-b-2 rounded-lg py-2 px-4 mr-4 focus:outline-none placeholder-colors-dark"
					/>
				</div>
				<div className="flex flex-col w-full md:w-1/2">
					<br />
					<Label
						family={(font && font.family) || "Sen"}
						className="md:w-2/3 block font-medium"
					>
						<input className="mr-2 leading-tight" type="checkbox" />
						<span className="text-sm text-colors-gray">
							Send me your newsletter!
						</span>
					</Label>
				</div>
			</div>
			<div className="h-8"></div>
		</>
	);
};

export default Form;
