import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Nav = styled.div`
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

const Navigation = ({ font }) => {
	return (
		<>
			<p className="text-xs font-bold text-colors-gray mb-4">
				NAVIGATION
			</p>
			<Nav family={(font && font.family) || "Sen"}>
				<nav class="flex items-center justify-between flex-wrap bg-colors-orange py-6 px-10 -mx-10">
					<div class="flex items-center flex-shrink-0 text-colors-white mr-6">
						<span class="font-semibold text-xl tracking-tight">
							{"🎨"} usefonts
						</span>
					</div>
					<div class="block lg:hidden">
						<button class="flex items-center px-3 py-2 border rounded text-colors-white border-teal-400 hover:text-white hover:border-white">
							<svg
								class="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div class="w-full md:block flex-grow lg:flex lg:items-center lg:w-auto hidden">
						<div class="text-sm lg:flex-grow">
							<a
								href="#responsive-header"
								class="block mt-4 lg:inline-block lg:mt-0 text-colors-white hover:text-white mr-4"
							>
								Home
							</a>
							<a
								href="#responsive-header"
								class="block mt-4 lg:inline-block lg:mt-0 text-colors-white hover:text-white mr-4"
							>
								About
							</a>
							<a
								href="#responsive-header"
								class="block mt-4 lg:inline-block lg:mt-0 text-colors-white hover:text-white"
							>
								Team
							</a>
						</div>
						<div>
							<a
								href="https:/"
								class="inline-block text-sm px-4 py-2 leading-none border rounded text-colors-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
							>
								Become a member
							</a>
						</div>
					</div>
				</nav>
			</Nav>
			<div className="h-8"></div>
		</>
	);
};

export default Navigation;
