import React from "react";

import TextUtil from "./Preview/Text";
import Buttons from "./Preview/Buttons";
import Tags from "./Preview/Tags";
import UtilDiv from "./Preview/UtilDiv";
import Form from "./Preview/Form";
import Navigation from "./Preview/Navigation";

const PreviewCard = ({ font }) => {
	const previewText = "A ship in the harbor is safe, but that is not what a ship is for."
		.split(" ")
		.join("+");
	return (
		<div className="bg-colors-white overflow-y-scroll h-screen py-16 px-10">
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
