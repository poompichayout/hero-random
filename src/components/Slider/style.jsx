import styled from 'styled-components';
import Marquee from "react-fast-marquee";

export const SliderWrapper = styled.div`
	display: flex;
	justify-content: center;

	margin-bottom: 2em;
`;

export const ButtonWrapper = styled.div`
	margin: auto;
	text-align: center;
`;

export const StyledMarquee = styled(Marquee)`
	margin: 0 auto;
	padding-bottom: 2em;

	width: 60%;

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
`;