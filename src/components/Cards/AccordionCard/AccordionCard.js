import React from 'react';
import CardBase from '../CardBase/CardBase';
import styles from '../CardBase/CardBase.module.css';

const AccordionCard = (props) => {
	const [isActive, setIsActive] = React.useState(false);

	function showContent() {
		setIsActive((isActive) => !isActive);
	}

	return (
		<CardBase type="accordionCard">
			<div className={styles.accordionHeader} onClick={showContent}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.accordionShow}>{isActive ? '-' : '+'}</p>
			</div>
			{isActive && <p className={styles.accordionContent}>{props.content}</p>}
			{isActive && (
				<a className={styles.description} href={props.link} target="blank">
					{props.description}
				</a>
			)}
		</CardBase>
	);
};

export default AccordionCard;
