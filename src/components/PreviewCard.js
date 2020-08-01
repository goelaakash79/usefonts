import React from "react";

import TextUtil from "./Preview/Text";
import Buttons from "./Preview/Buttons";
import Tags from "./Preview/Tags";
import UtilDiv from "./Preview/UtilDiv";
import Form from "./Preview/Form";
import Navigation from "./Preview/Navigation";

const PreviewCard = ({ font, onClose }) => {
	const previewText = "A ship in the harbor is safe, but that is not what a ship is for."
		.split(" ")
		.join("+");
	return (
		<div className="bg-colors-white overflow-y-scroll h-screen py-12 px-10">
			<span
				onClick={() => {
					onClose();
				}}
				className="cursor-pointer right-0 px-6 absolute md:hidden block"
			>
				<svg viewBox="0 0 384 384" xmlSpace="preserve" height="20">
					<circle cx={192} cy={192} r={176} fill="#E9C46A" />
					<g fill="#012e52">
						<path d="M368 176c-8.832 0-16 7.168-16 16 0 88.224-71.776 160-160 160S32 280.224 32 192 103.776 32 192 32c42.944 0 83.264 16.792 113.528 47.272 6.216 6.264 16.344 6.304 22.624.08 6.272-6.224 6.304-16.352.08-22.632C291.92 20.144 243.536 0 192 0 86.128 0 0 86.128 0 192s86.128 192 192 192c105.864 0 192-86.128 192-192 0-8.832-7.168-16-16-16z" />
						<path d="M251.312 132.688c-6.248-6.248-16.376-6.248-22.624 0L192 169.376l-36.688-36.688c-6.24-6.248-16.384-6.248-22.624 0-6.248 6.248-6.248 16.376 0 22.624L169.376 192l-36.688 36.688c-6.248 6.248-6.248 16.376 0 22.624C135.808 254.44 139.904 256 144 256s8.192-1.56 11.312-4.688L192 214.624l36.688 36.688C231.816 254.44 235.904 256 240 256s8.184-1.56 11.312-4.688c6.248-6.248 6.248-16.376 0-22.624L214.624 192l36.688-36.688c6.248-6.248 6.248-16.376 0-22.624z" />
					</g>
				</svg>
			</span>
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
			<Navigation font={font} />
			<TextUtil font={font} />
			<Buttons font={font} />
			<Form font={font} />
			<UtilDiv font={font} />
			<Tags font={font} />
		</div>
	);
};

export default PreviewCard;
