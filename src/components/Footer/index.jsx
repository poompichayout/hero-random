import React from "react";
import { Detail, FooterWrapper, LeftColumn, RightColumn } from "./style";

const Footer = () => {
	return (
		<FooterWrapper>
			<LeftColumn>
				<h2>TRADE</h2>
				<p>2010-2020</p>
				<p>Privacy - Terms</p>
			</LeftColumn>
			<RightColumn>
				<Detail>
					<h4>Products</h4>
					<p>Product</p>
					<p>Product</p>
					<p>Product</p>
				</Detail>
				<Detail>
					<h4>Features</h4>
					<p>Feature</p>
					<p>Feature</p>
					<p>Feature</p>
				</Detail>
				<Detail>
					<h4>Resources</h4>
					<p>Resource</p>
					<p>Resource</p>
					<p>Resource</p>
				</Detail>
				<Detail>
					<h4>Company</h4>
					<p>Company</p>
					<p>Company</p>
					<p>Company</p>
				</Detail>
			</RightColumn>
		</FooterWrapper>
	);
};

export default Footer;
