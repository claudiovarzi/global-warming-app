import React from 'react';
import styles from './ContributeCard.module.css';
import { Link } from 'react-router-dom';
import dashboardCardsData from '../../../data/dashboardCardsData';

export default function ContributeCard() {
	return (
		<Link to={'/contribute'} className={`${styles.container} animate__animated animate__fadeInRight`}>
			<div className={styles.contributeCard}>
				<h3 className={styles.title}>{dashboardCardsData.contribute.title}</h3>
				{dashboardCardsData.contribute.content}
				<p className={styles.description}>{dashboardCardsData.contribute.description}</p>
			</div>
		</Link>
	);
}
