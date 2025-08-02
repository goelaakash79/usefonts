import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Tag = styled.span`
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

const Tags = ({ font }) => {
	return (
		<>
			<div className="text-sm font-normal text-gray mb-4 font-['Space_Mono'] uppercase tracking-tighter">tags</div>
			<div>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-colors-yellow rounded-lg px-3 py-1 text-sm font-medium text-colors-black mr-2"
				>
					#photography
				</Tag>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-colors-dark rounded-lg px-3 py-1 text-sm font-medium text-colors-white mr-2"
				>
					#travel
				</Tag>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-colors-orange rounded-lg px-3 py-1 text-sm font-medium text-colors-white"
				>
					#winter
				</Tag>
			</div>
		</>
	);
};

export default Tags;
