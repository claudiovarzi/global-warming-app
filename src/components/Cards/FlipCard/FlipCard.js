import React from 'react';
import styles from './FlipCard.module.css';
import 'animate.css';

export default function FlipCard(props) {
	// card flip state
	const [isFlipped, setIsFlipped] = React.useState(false);

	const propStyles = {
		color: props.iconColor,
	};

	// conditionally render card content based on flip state
	const currentUI = isFlipped ? (
		<p className={styles.description}>{props.description}</p>
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

	const cardClass = isFlipped
		? `${styles.card} ${'animate__animated animate__flipInY'}`
		: `${styles.card} ${'animate__animated animate__zoomInDown'}`;

	return (
		<div className={cardClass} onClick={flipCard}>
			{currentUI}
		</div>
	);
}
