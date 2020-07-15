import React, { useState, useEffect } from "react";
import FontList from "./FontList";
import PreviewCard from "./PreviewCard";
import SearchBox from "./SearchBox";
import { fetchFonts } from "../service";
import Loader from "./Loader";

const Container = () => {
	const [fonts, setFonts] = useState([]);
	const [allfonts, setAllFonts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedFont, setSelectedFont] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const res = await fetchFonts();
				// let i,
				// 	j,
				// 	temparray,
				// 	chunk = 50;
				// for (i = 0, j = res.length; i < j; i += chunk) {
				// 	temparray = res.slice(i, i + chunk);
				// 	setAllFonts(allfonts.push(temparray));
				// }
				setAllFonts(res);
				setFonts(res);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				console.log(err);
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

	return (
		<div className="flex gap-4">
			<div className="w-4/12">
				<SearchBox onSearch={handleSearch} />
				{loading ? (
					<div className="flex justify-center">
						<Loader />
					</div>
				) : (
					<FontList
						fonts={fonts.length >= 900 ? fonts.slice(0, 50) : fonts}
						allfonts={allfonts}
						cardClick={handleClick}
					/>
				)}
			</div>
			<div className="w-1/12"></div>
			<div className="w-7/12">
				<PreviewCard font={selectedFont} />
			</div>
		</div>
	);
};

export default Container;
