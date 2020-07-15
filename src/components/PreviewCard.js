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
		<div className="rounded-lg bg-white overflow-y-scroll h-screen py-6 px-8">
			{Object.keys(font).length > 0 ? (
				<>
					<div className="font-sen text-gray-600">
						<p className="font-bold text-2xl text-gray-700">
							{font.family}{" "}
						</p>
						<span className="text-sm px-2 mr-4 rounded py-px bg-blue-400 font-medium text-white">
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
							className="text-blue-700 underline text-sm"
						>
							Go to Google fonts
						</a>
					</div>
					<hr className="mb-8 mt-4" />
				</>
			) : null}
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				HEADING
			</p>
			<Text
				family={(font && font.family) || "Open Sans"}
				className="text-5xl font-black text-blue-700 m-0 p-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Explore the real experience.
			</Text>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				PARAGRAPH
			</p>
			<Text
				family={(font && font.family) || "Open Sans"}
				className="text-base text-blue-900 m-0 p-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				We aim to automate and optimize your logistics operations with
				scalable and reliable technology solutions, to help boost
				business efficiency and align ourselves with your goals.
			</Text>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				BUTTON
			</p>
			<Button
				family={(font && font.family) || "Open Sans"}
				className="text-base font-bold text-white m-0 px-8 py-2 bg-blue-600 rounded-lg border-none mr-4 mb-2 lg:mb-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Sign in with Google
			</Button>{" "}
			<Button
				family={(font && font.family) || "Open Sans"}
				className="text-base font-bold text-white m-0 px-8 py-2 bg-gray-800 rounded-lg border-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Click to continue
			</Button>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				INPUT
			</p>
			<div className="flex flex-row">
				<div className="flex flex-col w-1/2">
					<Label
						family={(font && font.family) || "Open Sans"}
						className="text-sm font-sen font-medium text-gray-500 mb-2"
					>
						Enter your email
					</Label>

					<Input
						family={(font && font.family) || "Open Sans"}
						type="text"
						placeholder="john.doe@noobs.com"
						className="border-blue-700 bg-blue-100 border-b-2 rounded-lg py-2 px-4 font-sen mr-4"
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<br />
					<Label
						family={(font && font.family) || "Open Sans"}
						className="md:w-2/3 block font-medium"
					>
						<input className="mr-2 leading-tight" type="checkbox" />
						<span className="text-sm text-gray-600">
							Send me your newsletter!
						</span>
					</Label>
				</div>
			</div>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				ALERT
			</p>
			<Div
				family={(font && font.family) || "Open Sans"}
				className="bg-blue-100 border-l-4 border-blue-500 rounded sm:w-full lg:w-1/2 text-blue-900 px-4 py-3 shadow-md"
				role="alert"
			>
				<div className="flex">
					<div className="py-1">
						<svg
							className="fill-current h-6 w-6 text-blue-500 mr-4"
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
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				CARD
			</p>
			<Div
				className="max-w-sm rounded-lg overflow-hidden shadow-md"
				family={(font && font.family) || "Open Sans"}
			>
				<img
					className="w-full h-32"
					src="https://picsum.photos/400/200/?blur=5"
					alt="Sunset in the mountains"
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						The Coldest Sunset
					</div>
					<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Voluptatibus quia, nulla! Maiores et perferendis
						eaque, exercitationem praesentium nihil.
					</p>
				</div>
			</Div>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				TAGS
			</p>
			<div>
				<Tag
					family={(font && font.family) || "Open Sans"}
					className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700 mr-2"
				>
					#photography
				</Tag>
				<Tag
					family={(font && font.family) || "Open Sans"}
					className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700 mr-2"
				>
					#travel
				</Tag>
				<Tag
					family={(font && font.family) || "Open Sans"}
					className="inline-block bg-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700"
				>
					#winter
				</Tag>
			</div>
			<div className="h-32"></div>
		</div>
	);
};

export default PreviewCard;
