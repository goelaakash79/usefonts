import React, { useState, useEffect } from "react";
import FontList from "./FontList";
import PreviewCard from "./PreviewCard";
import SearchBox from "./SearchBox";
import { fetchFonts } from "../service";
import Loader from "./Loader";
import Header from "./Header";
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
const Container = () => {
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
			<div className="flex md:flex-row flex-col w-full bg-colors-light h-screen">
				<div className="flex flex-col md:w-5/12 w-full container md:pl-20 md:pr-8 lg:pl-32 lg:pr-16 px-5 mx-auto h-screen">
					<Header />
					<div className="mb-4" />

					<SearchBox onSearch={handleSearch} />
					<div className="mb-4" />

					<div className="mb-4">
						<p className="font-semibold text-sm text-colors-gray mb-2">
							Sort by
						</p>
						<div className="flex flex-wrap gap-2">
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									param === "ALPHA"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => setParam("ALPHA")}
							>
								A-Z
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									param === "TRENDING"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => setParam("TRENDING")}
							>
								Trending
							</span>
							{/* <span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${param==="DATE" ? "bg-colors-orange":"bg-colors-yellow"}`}
								onClick={() => setParam("DATE")}
							>
								DATE
							</span> */}
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									param === "POPULARITY"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => setParam("POPULARITY")}
							>
								Popularity
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black cursor-pointer ${
									param === "STYLE"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => setParam("STYLE")}
							>
								Style
							</span>
						</div>
					</div>
					<div className="mb-4">
						<p className="font-semibold text-sm text-colors-gray mb-2">
							Filter by
						</p>
						<div className="flex gap-2 flex-wrap">
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									category === "sans-serif"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() =>
									handleCategoryChange("sans-serif")
								}
							>
								sans-serif
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									category === "serif"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => handleCategoryChange("serif")}
							>
								serif
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									category === "display"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() => handleCategoryChange("display")}
							>
								display
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black mr-2 cursor-pointer ${
									category === "monospace"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() =>
									handleCategoryChange("monospace")
								}
							>
								monospace
							</span>
							<span
								className={`inline-block rounded-lg px-3 py-1 text-xs font-medium text-colors-black cursor-pointer ${
									category === "handwriting"
										? "bg-colors-orange"
										: "bg-colors-yellow"
								}`}
								onClick={() =>
									handleCategoryChange("handwriting")
								}
							>
								handwriting
							</span>
						</div>
					</div>

					{loading ? (
						<div className="flex justify-center">
							<Loader />
						</div>
					) : (
						<>
							<p className="font-semibold text-sm text-colors-gray mb-2">
								Showing {fonts && tempfonts.length} of{" "}
								{allfonts && allfonts.length} fonts
							</p>
							<FontList
								fonts={tempfonts}
								allfonts={allfonts}
								cardClick={handleClick}
							/>
						</>
					)}

					<div className="mb-4"></div>

					<div className="bg-colors-light cursor-pointer text-colors-dark font-semibold text-sm mb-4">
						<a
							href="https://github.com/goelaakash79/font-preview"
							rel="noopener noreferrer"
							target="_blank"
						>
							give it a{" "}
							<svg
								fill="currentColor"
								className="inline-block text-colors-yellow"
								viewBox="0 0 20 20"
								height="20px"
								width="20px"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>{" "}
							on {svg}
						</a>{" "}
						|{" "}
						<a
							href="https://twitter.com/goelaakash79"
							rel="noopener noreferrer"
							target="_blank"
						>
							developed by @goelaakash79
						</a>
					</div>
				</div>
				<div
					className={`md:w-7/12 md:block md:relative absolute md:top-auto top-0 w-full ${
						mobileSheet ? "block" : "hidden"
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

export default Container;
