const api = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_URL}&sort=trending`;

export const fetchFonts = async params => {
	try {
		const res = await fetch(api);
		const data = await res.json();
		return data.items;
	} catch (err) {
		return err.message;
	}
};
