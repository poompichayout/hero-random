import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import HeroItem from "../HeroItem";
import HeroModal from "../HeroModal";
import { PrimaryButton, SecondaryButton } from "../../style/global";
import { ButtonWrapper } from "./style";

import arrow from "../../images/pointer.png";

const Slider = ({ heroes, setHistory }) => {
	const [play, setPlay] = useState(false);
	const [speed, setSpeed] = useState(1000);
	const [isStopping, setStopping] = useState(false);
	const [activeHero, setActiveHero] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const didSliderMount = useRef(false);
	const counterRef = useRef(speed);
	const interval = useRef(null);

	const onRandomClick = () => {
		setStopping(true);
		setModalOpen(false);
		setActiveHero(null);

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
				setModalOpen(true);
			});
		} else {
			counterRef.current = 1000;
			setSpeed(1000);
			setPlay(true);
			setStopping(false);
		}
	};

	useEffect(() => {
		if (!didSliderMount.current) {
			return didSliderMount.current = true;
		}

		if (modalOpen === false) {
			setHistory((histories) => [...histories, activeHero])
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalOpen]);

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
						setActiveHero={setActiveHero}
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
			<HeroModal
				open={modalOpen}
				hero={activeHero}
				setOpen={setModalOpen}
			/>
		</div>
	);
};

export default Slider;
