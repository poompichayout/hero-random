import styled from "styled-components";

export const Modal = styled.div`
	display: ${props => props.open === true ? 'block' : 'none'}; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 5; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: hidden; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: 15% auto; /* 15% from the top and centered */
	padding: 20px;
	border: 1px solid #888;
	height: 300px;
	width: 300px;
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeroTitle = styled.p`
	font-size: 20px;
`;

export const HeroDescription = styled.p`
	font-size: 20px;
`;