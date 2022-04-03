import { useState, Fragment } from "react";
import {  HistoryTable, Slider } from "../../components";
import { LandingWrapper } from "./style";
import heroData from "../../utils/heroes";

function HomePage() {
	const [heroes] = useState(heroData);
	const [history, setHistory] = useState([]);
	const [openHistory, setOpenHistory] = useState(false);

	return (
		<Fragment>
			<LandingWrapper>
				<h1>Let's randomize the hero that suits you!</h1>
			</LandingWrapper>

			<Slider
				heroes={heroes}
				setHistory={setHistory}
				setOpenHistory={setOpenHistory}
			/>
			<HistoryTable data={history} open={openHistory} />
		</Fragment>
	);
}

export default HomePage;
