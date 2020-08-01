import React, { useState, useEffect } from "react";
import FontList from "./FontList";
import PreviewCard from "./PreviewCard";
import SearchBox from "./SearchBox";
import { fetchFonts } from "../service";
import Loader from "./Loader";
import Header from "./Header";

const Container = () => {
	const [fonts, setFonts] = useState([]);
	const [allfonts, setAllFonts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedFont, setSelectedFont] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const res = await fetchFonts();
				setAllFonts(res);
				setFonts(res);
				setLoading(false);
			} catch (err) {
				setLoading(false);
			}
		})();
	}, []);

	const handleSearch = async value => {
		setLoading(true);
		const res = await fetchFonts();
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
	};
	// bg-colors-light
	const tempfonts = fonts && fonts.length >= 900 ? fonts.slice(0, 50) : fonts;
	return (
		<>
			<div className="flex md:flex-row flex-col w-full h-screen">
				<div className="md:w-5/12 w-full bg-colors-light max-h-screen">
					<div className="container md:pl-32 md:pr-16 px-5 mx-auto">
						<Header />
						<SearchBox onSearch={handleSearch} />
						{loading ? (
							<div className="flex justify-center">
								<Loader />
							</div>
						) : (
							<>
								<p className="font-semibold text-colors-gray mb-2">
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
					</div>
				</div>
				<div className="md:w-7/12 md:block md:relative absolute md:top-auto top-0 w-full hidden">
					<PreviewCard font={selectedFont} />
				</div>
			</div>
			{/* <div className="container px-5 w-full h-full mx-auto">
				<Header />
				<div className="flex gap-4" id="main-container">
					<div className="w-4/12">
						<SearchBox onSearch={handleSearch} />
						{loading ? (
							<div className="flex justify-center">
								<Loader />
							</div>
						) : (
							<>
								<p className="capitalize font-sen font-bold text-gray-500 mb-2">
									Total Fonts: {fonts && tempfonts.length} /{" "}
									{allfonts && allfonts.length}
								</p>
								<FontList
									fonts={tempfonts}
									allfonts={allfonts}
									cardClick={handleClick}
								/>
							</>
						)}
					</div>
					<div className="w-1/12"></div>
					<div className="w-7/12">
						<PreviewCard font={selectedFont} />
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Container;
