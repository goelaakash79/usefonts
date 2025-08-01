'use client'

import React from "react";
import { useFontLoader, createFontPreviewStyle } from "../../utils/fontLoader";

const Form = ({ font }) => {
	const { isLoaded, isLoading } = useFontLoader(font?.family);
	const fontStyle = createFontPreviewStyle(font?.family, isLoaded);

	return (
		<>
			<p className="text-xs font-bold text-gray mb-4">FORM</p>
			<form style={fontStyle}>
				<div className="mb-4">
					<label className="block text-gray text-sm font-bold mb-2">
						Email Address
					</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray text-sm font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						placeholder="Enter your password"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-orange hover:bg-shadow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Sign In
					</button>
					<a
						className="inline-block align-baseline font-bold text-sm text-orange hover:text-shadow"
						href="#"
					>
						Forgot Password?
					</a>
				</div>
			</form>
			{isLoading && (
				<div className="text-xs text-gray mt-2">
					Loading font...
				</div>
			)}
			<div className="h-8"></div>
		</>
	);
};

export default Form;
