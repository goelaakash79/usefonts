/**
 * Main Container Component
 * 
 * This is the root component that manages the entire font preview application.
 * It handles font fetching, filtering, sorting, and state management for the app.
 * 
 * Features:
 * - Font data fetching and caching
 * - Category and sort filtering
 * - Search functionality
 * - Font preloading optimization
 * - Mobile responsive layout
 */

'use client'

import React, { useState, useEffect } from "react";
import PreviewCard from "./preview-panel";
import { fetchFonts } from "../../lib/service";
import fontPreloaderV2 from "../../lib/font-preloader-v2";
import SideBar from "./side-bar";
import { getFavorites } from "../../lib/favorites";

const MainContainer = () => {
	// State for sort parameter (ALPHA, POPULARITY, DATE, STYLE, TRENDING)
	const [param, setParam] = useState("ALPHA");

	// State for category filter (serif, sans-serif, display, monospace, handwriting, null for all)
	const [category, setCategory] = useState(null);

	// State for filtered fonts (what user sees)
	const [fonts, setFonts] = useState([]);

	// State for all fonts (complete dataset)
	const [allfonts, setAllFonts] = useState([]);

	// Loading state for UI feedback
	const [loading, setLoading] = useState(true);

	// Mobile sheet state for responsive design
	const [mobileSheet, setMobileSheet] = useState(false);

	// Currently selected font for preview
	const [selectedFont, setSelectedFont] = useState({});

	/**
	 * Initial font loading effect
	 * Fetches fonts when component mounts or sort parameter changes
	 */
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

	/**
	 * Handles category filter changes
	 * @param {string|null} newCategory - The new category to filter by (null for all categories)
	 */
	const handleCategoryChange = async (newCategory) => {
		setLoading(true);
		setCategory(newCategory);

		try {
			const res = await fetchFonts(param);
			setAllFonts(res);

			// Handle different category filters
			if (newCategory === "favorites") {
				// Filter to show only favorited fonts
				try {
					const favorites = await getFavorites();
					const favoriteFontFamilies = favorites.map(f => f.fontFamily || f.family);
					const favoriteFonts = res.filter(font => favoriteFontFamilies.includes(font.family));
					setFonts(favoriteFonts);
				} catch (error) {
					setFonts([]);
				}
			} else if (newCategory) {
				// Filter by regular category
				const categoryFonts = res.filter(font => String(font.category) === newCategory);
				setFonts(categoryFonts);
			} else {
				// If clearing category, show all fonts
				setFonts(res);
			}

			// Initialize font preloading with new fonts
			fontPreloaderV2.initialize(res);
		} catch (err) {
			// Error fetching fonts for category
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Handles sort parameter changes
	 * @param {string} sortBy - The sort parameter (ALPHA, POPULARITY, DATE, STYLE, TRENDING)
	 */
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
			// Error fetching fonts with new sort
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Handles search functionality
	 * Clears all filters and searches across all fonts
	 * @param {string} value - The search term
	 */
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
			// Error fetching fonts for search
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Handles font selection for preview
	 * @param {Object} font - The selected font object
	 */
	const handleClick = font => {
		setSelectedFont(font);
		setMobileSheet(true);
	};

	/**
	 * Handles closing the mobile preview sheet
	 */
	const handleSheetClose = () => {
		setMobileSheet(false);
	};

	// Limit displayed fonts to 100 for performance
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
					className={`transform md:w-7/12 lg:w-2/3 md:block md:relative absolute md:top-auto top-0 w-full ease-linear transition-all duration-300 ${mobileSheet
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
