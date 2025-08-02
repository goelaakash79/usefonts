'use client'

import React, { useState, useEffect } from "react";

import PreviewCard from "./preview-panel";

import { fetchFonts } from "../../lib/service";
import fontPreloaderV2 from "../../lib/font-preloader-v2";

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

				// Initialize font preloading after fonts are loaded
				fontPreloaderV2.initialize(res);
			} catch (err) {
				setLoading(false);
			}
		})();
	}, [param]);

	const handleCategoryChange = async (newCategory) => {
		setLoading(true);
		setCategory(newCategory);

		try {
			const res = await fetchFonts(param);
			setAllFonts(res);

			// If changing to a specific category, filter by category
			if (newCategory) {
				const categoryFonts = res.filter(font => String(font.category) === newCategory);
				setFonts(categoryFonts);
			} else {
				// If clearing category, show all fonts
				setFonts(res);
			}

			// Initialize font preloading with new fonts
			fontPreloaderV2.initialize(res);
		} catch (err) {
			console.error('Error fetching fonts for category:', err);
		} finally {
			setLoading(false);
		}
	};

	const handleSortChange = async (sortBy) => {
		setLoading(true);
		setParam(sortBy);
		try {
			const res = await fetchFonts(sortBy);
			setAllFonts(res);

			// Apply category filter if one is selected
			if (category) {
				const categoryFonts = res.filter(font => String(font.category) === category);
				setFonts(categoryFonts);
			} else {
				setFonts(res);
			}

			// Initialize font preloading with new fonts
			fontPreloaderV2.initialize(res);
		} catch (err) {
			console.error('Error fetching fonts with new sort:', err);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async value => {
		setLoading(true);
		value = `${value}`.toLowerCase();

		// Clear category and sort filters when searching
		setCategory(null);
		setParam("ALPHA");

		// Fetch all fonts with default sort (ALPHA) for search
		try {
			const res = await fetchFonts("ALPHA");
			setAllFonts(res);

			// Filter fonts based on search value
			const filteredFonts = res.filter(font =>
				String(font.family).toLowerCase().includes(value)
			);

			setFonts(filteredFonts);
		} catch (err) {
			console.error('Error fetching fonts for search:', err);
		} finally {
			setLoading(false);
		}
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
			<div className="flex md:flex-row flex-col w-full h-screen overflow-hidden font-['Geist']">
				<SideBar
					handleSearch={handleSearch}
					category={category}
					loading={loading}
					fonts={fonts}
					tempfonts={tempfonts}
					allfonts={allfonts}
					handleClick={handleClick}
					handleCategoryChange={handleCategoryChange}
					handleSortChange={handleSortChange}
					currentSort={param}
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
