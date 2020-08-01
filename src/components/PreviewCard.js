import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import Loader from "./Loader";

const Text = styled.p`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {
					return <Loader />;
				}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

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

const PreviewCard = ({ font }) => {
	const previewText = "A ship in the harbor is safe, but that is not what a ship is for."
		.split(" ")
		.join("+");
	return (
		<div className="rounded-lg bg-colors-white overflow-y-scroll h-screen py-16 px-10">
			{Object.keys(font).length > 0 ? (
				<>
					<div className="text-colors-gray">
						<p className="font-bold text-2xl text-colors-black">
							{font.family}{" "}
						</p>
						<span className="text-sm px-2 mr-4 rounded py-px bg-colors-yellow font-medium text-colors-black">
							{font.category}
						</span>{" "}
						<a
							href={`https://fonts.google.com/specimen/${font.family
								.split(" ")
								.join(
									"+"
								)}?preview.text=${previewText}&preview.text_type=custom`}
							rel="noopener noreferrer"
							target="_blank"
							className="text-colors-dark underline text-sm"
						>
							Go to Google fonts
						</a>
					</div>
					<hr className="mb-8 mt-4" />
				</>
			) : null}
			<p className="text-xs  font-bold text-colors-gray mb-4">
				NAVIGATION
			</p>
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
			<div className="h-8"></div>
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
			<p className="text-xs  font-bold text-colors-gray mb-4">BUTTON</p>
			<Button
				family={(font && font.family) || "Sen"}
				className="text-base font-bold text-colors-white m-0 px-8 py-2 bg-colors-orange rounded-lg border-none mr-4 mb-2 lg:mb-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Sign in with Google
			</Button>{" "}
			<Button
				family={(font && font.family) || "Sen"}
				className="text-base font-bold text-colors-orange m-0 px-8 py-2 bg-colors-white border border-colors-orange rounded-lg"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Click to continue
			</Button>
			<div className="h-8"></div>
			<p className="text-xs font-bold text-colors-gray mb-4">INPUT</p>
			<div className="flex flex-row">
				<div className="flex flex-col w-1/2">
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
				<div className="flex flex-col w-1/2">
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
			<p className="text-xs font-bold text-colors-gray mb-4">ALERT</p>
			<Div
				family={(font && font.family) || "Sen"}
				className="bg-colors-light border-l-4 border-colors-orange rounded-md sm:w-full lg:w-1/2 text-colors-dark px-4 py-3 shadow-xs"
				role="alert"
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
				className="max-w-sm rounded-lg overflow-hidden shadow-xs bg-colors-light"
				family={(font && font.family) || "Sen"}
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
			<p className="text-xs  font-bold text-colors-gray mb-4">TAGS</p>
			<div>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700 mr-2"
				>
					#photography
				</Tag>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700 mr-2"
				>
					#travel
				</Tag>
				<Tag
					family={(font && font.family) || "Sen"}
					className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700"
				>
					#winter
				</Tag>
			</div>
		</div>
	);
};

export default PreviewCard;
