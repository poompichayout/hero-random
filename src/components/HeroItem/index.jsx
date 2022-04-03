import React, { useEffect, useRef, useState, useCallback } from "react";
import { Card, LogoWrapper } from "./style";

const HeroItem = ({ hero, isPlay, setActiveHero, style, ...props }) => {
	const ref = useRef(false);
	const [properties, setProperties] = useState(null);
	const [active, setActive] = useState(false);
	const isCenter = useCallback(() => {
		return (
			properties?.left > window.innerWidth / 2 - properties?.width &&
			properties?.right < window.innerWidth / 2 + properties?.width
		);
	}, [properties?.left, properties?.right, properties?.width])

	useEffect(() => {
		if (!ref.current) {
			return;
		}
		
		setProperties(ref.current.getBoundingClientRect());
		setActive(!isPlay && isCenter());
	}, [isPlay, properties?.left, properties?.right, properties?.width, isCenter]);

	useEffect(() => {
		if (active && isCenter()) {
			setActiveHero(hero);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	return (
		<Card ref={ref} style={style} active={active} {...props}>
			<LogoWrapper>
				<img
					src={require(`../../images/${hero.image}`)}
					alt=""
					width="60"
					height="60"
				/>
			</LogoWrapper>
			<div>
				<p>{hero?.name}</p>
			</div>
		</Card>
	);
};

export default HeroItem;
