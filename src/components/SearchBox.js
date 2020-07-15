import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
	const [text, setText] = useState("");
	const handleKeyPress = event => {
		if (event.key === "Enter" && String(text).length >= 2) {
			console.log("enter press here! ");
			onSearch(text);
		}
	};

	return (
		<input
			type="text"
			placeholder="search your font here..."
			className="border-black border-b-2 w-full rounded-lg py-2 px-4 font-sen mb-6"
			onChange={e => setText(e.target.value)}
			onKeyPress={handleKeyPress}
		/>
	);
};

export default SearchBox;
