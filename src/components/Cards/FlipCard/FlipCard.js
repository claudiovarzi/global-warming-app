import React from 'react';
import CardBase from '../CardBase/CardBase';
import styles from '../CardBase/CardBase.module.css';
import 'animate.css';

const FlipCard = (props) => {
	// card flip state
	const [isFlipped, setIsFlipped] = React.useState(false);

	const propStyles = {
		color: props.iconColor,
	};

	// conditionally render card content based on flip state
	const currentUI = isFlipped ? (
		<p className={styles.notALink}>{props.description}</p>
	) : (
		<div>
			<div className={styles.cardIcon} style={propStyles}>
				{props.icon}
			</div>
			<h3 className={styles.cardTitle}>{props.title}</h3>
		</div>
	);

	// set card flip
	function flipCard() {
		setIsFlipped((isFlipped) => !isFlipped);
	}

	const flipClass = isFlipped
		? `${'animate__animated animate__flipInY'}`
		: `${'animate__animated animate__zoomInDown'}`;

	return (
		<div className={flipClass} onClick={flipCard}>
			<CardBase type="flipCard" isFlipCard={props.isFlipCard}>
				{currentUI}
			</CardBase>
		</div>
	);
};

export default FlipCard;
