'use client'

import React, { useState, useEffect } from "react";

import PreviewCard from "./preview-panel";

import { fetchFonts } from "../../lib/service";

import SideBar from "./side-bar";

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
			<div className="flex md:flex-row flex-col w-full bg-[#FAF9F6] h-screen overflow-hidden font-['Geist']">
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
