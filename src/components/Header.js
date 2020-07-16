import React from "react";
import { FeedbackForm } from "feedback-fish";

const svg = (
	<svg
		className="inline-block"
		viewBox="0 0 48 48"
		width="20px"
		height="20px"
	>
		<path
			fill="#455A64"
			d="M40.3 15.7c.6-1.7 1.2-5-.4-8.7-4.5 0-8.3 3.2-8.9 3.8-2.2-.5-4.6-.7-7-.7-2.5 0-4.9.3-7.2.8C13.7 7.7 9.6 7 8 7c0 0-.9 1.8-.9 5 0 2 .5 3.2.8 3.8C5.5 18.3 4 21.7 4 26.1c0 11.2 7.1 15 20 15s20-3.8 20-15c0-4.6-1.4-8-3.7-10.4z"
		/>
		<path
			fill="#FFCCBC"
			d="M24 39c-8.2 0-15-1.4-15-9 0-2.9 1.6-4.5 2.7-5.5 2.5-2.2 6.7-1.2 12.3-1.2 4.1 0 7.6-.7 10.4.2 2.8.9 4.6 3.5 4.6 6.3 0 7.9-4 9.2-15 9.2z"
		/>
		<path
			fill="#D84315"
			d="M25 34c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm1.5 2.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0c-.9.9-2.6.9-3.5 0-.2-.2-.5-.2-.7 0s-.2.5 0 .7c.7.7 1.5 1 2.5 1s1.7-.4 2.4-1z"
		/>
		<path
			fill="#FFF"
			d="M19 29.5c0 2.5-1.3 4.5-3 4.5s-3-2-3-4.5 1.3-4.5 3-4.5 3 2 3 4.5zM32 25c-1.7 0-3 2-3 4.5s1.3 4.5 3 4.5 3-2 3-4.5-1.3-4.5-3-4.5z"
		/>
		<path
			fill="#6D4C41"
			d="M34 30c0 1.7-.9 3-2 3s-2-1.3-2-3c0-.2 0-.5.1-.7.1.4.5.7.9.7.6 0 1-.4 1-1s-.4-1-1-1c-.2 0-.4.1-.6.2.4-.7.9-1.2 1.6-1.2 1.1 0 2 1.3 2 3zm-18-3c-.7 0-1.2.5-1.6 1.2.2-.1.4-.2.6-.2.6 0 1 .4 1 1s-.4 1-1 1c-.4 0-.8-.3-.9-.7 0 .2-.1.5-.1.7 0 1.7.9 3 2 3s2-1.3 2-3-.9-3-2-3z"
		/>
	</svg>
);

const FeedbackButton = props => (
	<svg
		height="20px"
		className="inline-block text-blue-600"
		{...props}
		fill="currentColor"
		viewBox="0 0 20 20"
	>
		<path
			fillRule="evenodd"
			d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
			clipRule="evenodd"
		></path>
	</svg>
);

const Header = () => {
	return (
		<h1 className="font-serif pt-8 md:text-4xl lg:text-5xl text-xl font-black text-blue-600 mb-4">
			<i>useFonts</i>{" "}
			<span className="absolute right-0 top-4 cursor-pointer bg-white px-6 py-2 border-b-4 border-gray-400 rounded-l-full text-gray-700 font-sen font-semibold text-sm">
				<a
					href="https://github.com/goelaakash79/font-preview"
					rel="noopener noreferrer"
					target="_blank"
					className=""
				>
					give it a{" "}
					<svg
						fill="currentColor"
						className="inline-block text-blue-600"
						viewBox="0 0 20 20"
						height="20px"
						width="20px"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>{" "}
					on {svg}
				</a>{" "}
				|{" "}
				<a
					href="https://twitter.com/goelaakash79"
					rel="noopener noreferrer"
					target="_blank"
					className=""
				>
					@goelaakash79
				</a>{" "}
				|{" "}
				<FeedbackForm
					projectId="baeb2104de7b8b"
					triggerComponent={FeedbackButton}
				/>
			</span>
		</h1>
	);
};

export default Header;
