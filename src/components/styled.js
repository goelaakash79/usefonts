import React from "react";
import styled from "styled-components";

export const ptag = styled.p`
	@font-face {
		font-family: font;
		src: ${({ x }) => {
			return `url(${x})`;
		}};
	}
	font-family: font !important;
`;
