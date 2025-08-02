'use client'

import { Input } from "@/components/ui/input";
import React, { useMemo } from "react";

const debounce = (fn, delay) => {
	let timeoutId;
	return function (...args) {
		clearInterval(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
};

const SearchBox = ({ onSearch }) => {
	const debounceCallback = useMemo(
		() => debounce(value => {
			onSearch(value);
		}, 400),
		[onSearch]
	);

	const handleChange = ({ target: { value } }) => {
		debounceCallback(value);
	};

	return (
		<>
			{/* <input
				type="text"
				placeholder="search your font here..."
				className="border-orange border border-b-4 w-full rounded-lg py-2 px-4 focus:outline-none"
				onChange={handleChange}
			/> */}

			<Input
				type="text"
				placeholder="search your font here..."
				className="py-6 px-4 text-lg font-['Geist'] font-normal text-black rounded-xl tracking-tight bg-white w-60"
				// className="border-orange border border-b-4 w-full rounded-lg py-2 px-4 focus:outline-none"
				onChange={handleChange}
			/>
		</>
	);
};

export default SearchBox;
