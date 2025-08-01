import React from "react";
import Lottie from "lottie-react";
import logoLottie from "../../public/assets/logo.json";

const Header = () => {
	return (
		<div className="sm:pt-6 pt-4">
			<Lottie className="w-20" animationData={logoLottie} loop={true} />
		</div>
	);
};

export default Header;
