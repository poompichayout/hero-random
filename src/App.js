import { useState } from "react";
import { Header, Footer, HistoryTable, Slider } from "./components";
import { Wrapper, LandingWrapper } from "./style/global";
import heroData from "./utils/heroes";

function App() {
	const [heroes] = useState(heroData);
	const [history, setHistory] = useState([]);
	const [openHistory, setOpenHistory] = useState(false);
	
	return (
		<Wrapper>
			<Header />
			<LandingWrapper>
				<h1>Let's randomize the hero that suits you!</h1>
			</LandingWrapper>

			<Slider heroes={heroes} setHistory={setHistory} setOpenHistory={setOpenHistory} />
			<HistoryTable data={history} open={openHistory} />
			<Footer />
		</Wrapper>
	);
}

export default App;
