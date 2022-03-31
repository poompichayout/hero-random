import React, { useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import HeroItem from "../HeroItem";
import { PrimaryButton, SecondaryButton } from "../../style/global";
import { ButtonWrapper } from "./style";

import arrow from "../../images/pointer.png";

const Slider = ({ heroes }) => {
	const [play, setPlay] = useState(false);
	const [speed, setSpeed] = useState(1000);
	const [isStopping, setStopping] = useState(false);

	const counterRef = useRef(speed);
	const interval = useRef(null);

	const onRandomClick = () => {
		setStopping(true);

		if (play) {
			let myPromise = new Promise(function (resolve) {
				interval.current = setInterval(function () {
					if (counterRef.current <= 0) {
						clearInterval(interval.current);
						resolve();
					} else {
						counterRef.current -= 300;
					}
				}, 500);
			});

			myPromise.then(() => {
				setPlay(false);
				setStopping(false);
			});
		} else {
			counterRef.current = 1000;
			setSpeed(1000);
			setPlay(true);
			setStopping(false);
		}
	};

	const onRandomFinish = (hero) => {
		// calculate what hero is on the center
		console.log("active hero:", hero);
	};

	return (
		<div>
			<div style={{ textAlign: "center", marginBottom: "0.5em" }}>
				<img src={arrow} alt="" width="40" height="40" />
			</div>

			<Marquee
				direction="right"
				speed={speed}
				play={play}
				pauseOnHover={!play}
				pauseOnClick={!play}
				style={{
					margin: "0 auto",
					paddingBottom: "2em",
					maxWidth: "60%",
				}}
			>
				{heroes.map((hero) => (
					<HeroItem
						key={hero.id}
						hero={hero}
						isPlay={play}
						onRandomFinish={onRandomFinish}
						// active={hero.id % 2 === 0}
						style={{ margin: "0 1rem" }}
					/>
				))}
			</Marquee>

			<ButtonWrapper>
				<PrimaryButton
					style={{ marginRight: "15px" }}
					onClick={onRandomClick}
					disabled={isStopping}
				>
					{play ? (isStopping ? "Stopping" : "Stop") : "Random"}
				</PrimaryButton>
				<SecondaryButton>History</SecondaryButton>
			</ButtonWrapper>
		</div>
	);
};

export default Slider;
