import styled from "styled-components";

export const Wrapper = styled.div``;

export const PrimaryButton = styled.button`
	background: ${props => props.disabled? "#F5F5F5": "#4182f7"};
	border-radius: 15px;
	color: ${props => props.disabled? "black": "white"};
	text-align: center;
	cursor: pointer;
	border-style: solid;
	border-color: white;
	padding: 5px 10px;
	min-width: 100px;

	:hover {
		background: ${props => props.disabled? "#F5F5F5": "#5790fb"};
	}

	:active {
		background: ${props => props.disabled? "#F5F5F5": "#2f5bad"};
	}
`;

export const SecondaryButton = styled.button`
	background: white;
	border-radius: 15px;
	color: #4182f7;
	text-align: center;
	cursor: pointer;
	border-style: solid;
	border-color: #4182f7;
	padding: 5px 10px;
	min-width: 100px;

	:hover {
		background: #4182f7;
		color: white;
	}

	:active {
		background: #2f5bad;
		color: white;
		border-color: #2f5bad;
	}
`;

export const LandingWrapper = styled.div`
	margin-top: 5rem;
	text-align: center;
	font-weight: 400;
	font-size: 20px;
`;
