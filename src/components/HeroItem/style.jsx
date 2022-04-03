import styled from "styled-components";

export const Card = styled.div`
	height: 180px;
	width: 150px;
	background: ${props => props.active? '#99C1FE':'#ecf2ff'};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	text-align: center;
	color: ${props => props.active? 'white':'#4E4C61'};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${({ style }) => style}
`;

export const LogoWrapper = styled.div`
	background-color: white;
	border-radius: 50%;
	padding: 0.5em;
`;
