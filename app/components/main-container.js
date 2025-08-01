'use client'

import React, { useState, useEffect } from "react";

import PreviewCard from "./PreviewCard";

import { fetchFonts } from "../../lib/service";

import SideBar from "./side-bar";
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
const MainContainer = () => {
	const [param, setParam] = useState("ALPHA");
	const [category, setCategory] = useState(null);
	const [fonts, setFonts] = useState([]);
	const [allfonts, setAllFonts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [mobileSheet, setMobileSheet] = useState(false);
	const [selectedFont, setSelectedFont] = useState({});

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const res = await fetchFonts(param);
				setAllFonts(res);
				setFonts(res);
				setLoading(false);
			} catch (err) {
				setLoading(false);
			}
		})();
	}, [param]);

	const handleCategoryChange = category => {
		setLoading(true);
		setCategory(category);
		setFonts(allfonts.filter(font => String(font.category) === category));
		setLoading(false);
	};

	const handleSearch = async value => {
		setLoading(true);
		const res = await fetchFonts(param);
		value = `${value}`.toLowerCase();

		setFonts(
			res.filter(font =>
				String(font.family).toLowerCase().includes(value)
			)
		);
		setLoading(false);
	};

	const handleClick = font => {
		setSelectedFont(font);
		setMobileSheet(true);
	};

	const handleSheetClose = () => {
		setMobileSheet(false);
	};

	const tempfonts =
		fonts && fonts.length >= 100 ? fonts.slice(0, 100) : fonts;
	return (
		<>
			<div className="flex md:flex-row flex-col w-full bg-[#FAF9F6] h-screen">
				<SideBar
					handleSearch={handleSearch}
					category={category}
					loading={loading}
					fonts={fonts}
					tempfonts={tempfonts}
					allfonts={allfonts}
					handleClick={handleClick}
					handleCategoryChange={handleCategoryChange}
				/>
				<div
					className={`transform md:w-7/12 md:block md:relative absolute md:top-auto top-0 w-full ease-linear transition-all duration-300 ${mobileSheet
						? "block translate-x-0"
						: "hidden -translate-x-full'"
						}`}
				>
					<PreviewCard
						font={selectedFont}
						onClose={handleSheetClose}
					/>
				</div>
			</div>
		</>
	);
};

export default MainContainer;
