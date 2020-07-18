import React, { useCallback } from "react";

const debounce = (fn, delay) => {
	let timeoutId;
	return function (...args) {
		clearInterval(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
};

const SearchBox = ({ onSearch }) => {
	const debounceCallback = useCallback(
		debounce(value => {
			onSearch(value);
		}, 400),
		[]
	);

	const handleChange = ({ target: { value } }) => {
		debounceCallback(value);
	};

	return (
		<input
			name="text"
			type="text"
			placeholder="search your font here..."
			className="border-blue-700 border border-b-4 w-full rounded-lg py-2 px-4 font-sen mb-6"
			onChange={handleChange}
		/>
	);
};

export default SearchBox;
