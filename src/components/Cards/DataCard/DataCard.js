import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DataCard.module.css';
import dashboardCardsData from '../../../data/dashboardCardsData';

export default function DataCard() {
	// creating cards
	const dataCards = dashboardCardsData.data.content.map((data) => {
		return (
			<Link to={data.path} key={data.id}>
				<li className={styles.graphLink} style={{ backgroundColor: data.backgroundColor }}>
					<span className={styles.dataTitle}>{data.title}</span>
					{data.icon}
				</li>
			</Link>
		);
	});

	return (
		<div className={`${styles.dataCard} animate__animated animate__fadeInLeft`}>
			<h3 className={styles.title}>{dashboardCardsData.data.title}</h3>
			<ul className={styles.graphMenu}>{dataCards}</ul>
			<p className={styles.description}>{dashboardCardsData.data.description}</p>
		</div>
	);
}
