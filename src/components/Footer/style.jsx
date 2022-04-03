import styled from 'styled-components';

export const FooterWrapper = styled.div`
	display: flex;
	margin-top: 2em;
	padding: 50px 100px;
	color: white;
	background-color: #6390D4;

	p {
		font-weight: 100;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const LeftColumn = styled.div`
	
`;

export const RightColumn = styled.div`
	margin-left: auto;
	display: flex;

	@media only screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: auto auto;
		margin: 0;
	}
`;

export const Detail = styled.div`
	padding: 0 5em;

	@media only screen and (max-width: 1270px) {
		padding: 0 1.5em;
	}

	@media only screen and (max-width: 768px) {
		padding: 0;
	}
`;