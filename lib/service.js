/**
 * Google Fonts API Service
 * 
 * This module handles communication with the Google Fonts API.
 * It provides functions to fetch font data with various sorting options.
 * 
 * Features:
 * - Font data fetching from Google Fonts API
 * - Multiple sort options (alphabetical, popularity, date, etc.)
 * - Error handling and response processing
 * - Demo data fallback when API key is not available
 */

const api = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY || 'demo'}`;

/**
 * Fetch fonts from Google Fonts API with specified sorting
 * @param {string} params - Sort parameter (ALPHA, POPULARITY, DATE, STYLE, TRENDING)
 * @returns {Promise<Array>} Promise that resolves to array of font objects
 */
export const fetchFonts = async params => {
	try {
		// If no API key is provided, return demo data
		if (!process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY) {
			return getDemoFonts();
		}

		const res = await fetch(`${api}&sort=${params}`);
		const data = await res.json();
		return data.items;
	} catch (err) {
		// Return demo data on error
		return getDemoFonts();
	}
};

/**
 * Demo fonts data for when API key is not available
 * Provides a fallback set of popular fonts for development/testing
 * @returns {Array} Array of demo font objects
 */
const getDemoFonts = () => [
	{
		family: 'Roboto',
		category: 'sans-serif',
		variants: ['100', '300', '400', '500', '700', '900'],
		subsets: ['latin', 'latin-ext'],
		version: 'v30',
		lastModified: '2022-09-22',
		files: {
			'100': 'http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu51xIIzI.woff2',
			'300': 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
			'400': 'http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
			'500': 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
			'700': 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
			'900': 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfBBc4.woff2'
		}
	},
	{
		family: 'Open Sans',
		category: 'sans-serif',
		variants: ['300', '400', '600', '700', '800'],
		subsets: ['latin', 'latin-ext'],
		version: 'v40',
		lastModified: '2022-09-22',
		files: {
			'300': 'http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2',
			'400': 'http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVI.woff2',
			'600': 'http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVI.woff2',
			'700': 'http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVI.woff2',
			'800': 'http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVI.woff2'
		}
	},
	{
		family: 'Lato',
		category: 'sans-serif',
		variants: ['100', '300', '400', '700', '900'],
		subsets: ['latin', 'latin-ext'],
		version: 'v23',
		lastModified: '2022-09-22',
		files: {
			'100': 'http://fonts.gstatic.com/s/lato/v23/S6u8w4BMUTPHh30AXC-v.woff2',
			'300': 'http://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwiPHA.woff2',
			'400': 'http://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wWw.woff2',
			'700': 'http://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPHA.woff2',
			'900': 'http://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh50XSwiPHA.woff2'
		}
	}
];
