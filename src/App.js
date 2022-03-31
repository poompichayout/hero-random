import { useState } from "react";
import { Header, Footer, HistoryTable, Slider } from "./components";
import { Wrapper, LandingWrapper } from "./style/global";
import heroData from "./utils/heroes";

function App() {
	const [heroes, setHeroes] = useState(heroData);
	
	return (
		<Wrapper>
			<Header />
			<LandingWrapper>
				<h1>Let's randomize the hero that suits you!</h1>
			</LandingWrapper>

			<Slider heroes={heroes} setHeroes={setHeroes} />
			<HistoryTable />
			<Footer />
		</Wrapper>
	);
}

export default App;
