import React, { useEffect, useRef, useState, useCallback } from "react";
import { Card, LogoWrapper } from "./style";

const HeroItem = ({ hero, isPlay, onRandomFinish, style, ...props }) => {
	const ref = useRef(null);
	const [properties, setProperties] = useState(null);
	const [active, setActive] = useState(false);
	const isCenter = useCallback(() => {
		return (
			properties?.left > window.innerWidth / 2 - properties?.width &&
			properties?.right < window.innerWidth / 2 + properties?.width
		);
	}, [properties?.left, properties?.right, properties?.width])

	useEffect(() => {
		if (ref.current) {
			setProperties(ref.current.getBoundingClientRect());
		}
		setActive(!isPlay && isCenter());
	}, [isPlay, properties?.left, properties?.right, properties?.width, isCenter]);

	useEffect(() => {
		if (active && isCenter()) {
			onRandomFinish(hero);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	return (
		<Card ref={ref} style={style} active={active} {...props}>
			<LogoWrapper>
				<img
					src={require(`../../images/${hero.image}`)}
					alt=""
					width="50"
					height="50"
				/>
			</LogoWrapper>
			<div>
				<p>{hero?.name}</p>
			</div>
		</Card>
	);
};

export default HeroItem;
