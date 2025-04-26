import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Portfolio } from "./Portfolio";
import {Footer} from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container p-0">
			<Navbar />
			<Jumbotron />
			<Portfolio />
			<Footer />
			<div className="text-center">
			</div>
		</div>
	);
};

export default Home;