import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
	return (
		<div className="bg-blue-100 h-screen overflow-hidden">
			<div className="container mx-auto h-screen ">
				<Header />
				<Container />
			</div>
		</div>
	);
}

export default App;
