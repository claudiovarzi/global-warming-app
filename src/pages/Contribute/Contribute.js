import React from 'react';
import styles from './Contribute.module.css';
import pagesData from '../../data/pagesData';
import FlipCard from '../../components/Cards/FlipCard/FlipCard';
import flipCardsData from '../../data/flipCardsData';

export default function Contribute() {
	// creating cards
	const cards = flipCardsData.map((item) => {
		return (
			<FlipCard
				key={item.id}
				title={item.title}
				icon={item.icon}
				description={item.description}
				iconColor={item.iconColor}
			/>
		);
	});

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>{pagesData.contribute.title}</h1>
			<p className={styles.subtitle}>{pagesData.contribute.subtitle}</p>
			<section className={styles.cardGrid}>{cards}</section>
			<a className={styles.link} href={pagesData.contribute.link} target="blank">
				more info
			</a>
		</main>
	);
}
