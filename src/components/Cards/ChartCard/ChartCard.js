import React from 'react';
import styles from './ChartCard.module.css';
import dashboardCardsData from '../../../data/dashboardCardsData';
import 'animate.css';

export default function ChartCard() {
	// creating li elements
	const warmingCauses = dashboardCardsData.chart.description.map((cause, index) => {
		return (
			<li key={index} className={styles.listItem}>
				{cause}
			</li>
		);
	});

	return (
		<div className={`${styles.chartCard} animate__animated animate__fadeInLeft`}>
			<h3 className={styles.title}>{dashboardCardsData.chart.title}</h3>
			<div className={styles.div}>
				{dashboardCardsData.chart.content}
				<ul className={styles.causesList}>{warmingCauses}</ul>
			</div>
			<p className={styles.details}>{dashboardCardsData.chart.details}</p>
		</div>
	);
}
