import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
	const [text, setText] = useState("");
	const handleKeyPress = event => {
		if (event.key === "Enter" && String(text).length >= 2) {
			onSearch(text);
		}
	};

	return (
		<input
			type="text"
			placeholder="search your font here..."
			className="border-blue-700 border border-b-4 w-full rounded-lg py-2 px-4 font-sen mb-6"
			onChange={e => {
				setText(e.target.value);
			}}
			onKeyPress={handleKeyPress}
		/>
	);
};

export default SearchBox;
