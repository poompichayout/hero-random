import React from "react";
import { Modal, ModalContent, HeroTitle } from "./style";
import { LogoWrapper } from "../HeroItem/style";
import { PrimaryButton } from "../../style/global";

const HeroModal = ({ hero, open, setOpen }) => {
	return (
		<Modal open={open}>
			<ModalContent>
				<LogoWrapper>
					<img
						src={hero?.image ? require(`../../images/${hero?.image}`) : ''}
						alt=""
						width="100"
						height="100"
					/>
				</LogoWrapper>
				<HeroTitle>{hero?.name}</HeroTitle>
        <PrimaryButton onClick={() => setOpen(false)}>OK</PrimaryButton>
			</ModalContent>
		</Modal>
	);
};

export default HeroModal;
