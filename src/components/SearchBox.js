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
			type="text"
			placeholder="search your font here..."
			className="border-colors-orange border border-b-4 w-full rounded-lg py-2 px-4 focus:outline-none"
			onChange={handleChange}
		/>
	);
};

export default SearchBox;
