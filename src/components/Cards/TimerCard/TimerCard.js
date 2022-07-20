import React from 'react';
import styles from './TimerCard.module.css';
import dashboardCardsData from '../../../data/dashboardCardsData';
import 'animate.css';

export default function TimerCard() {
	return (
		<div className={`${styles.largeCard} animate__animated animate__fadeInDown`}>
			<h3 className={styles.title}>{dashboardCardsData.timer.title}</h3>
			{dashboardCardsData.timer.content}
			<p className={styles.description}>{dashboardCardsData.timer.description}</p>
		</div>
	);
}
