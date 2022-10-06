import React from 'react';
import styles from './ContributeButton.module.css';
import { Link } from 'react-router-dom';
import dashboardCardsData from '../../data/dashboardCardsData';

export default function ContributeButton() {
	return (
		<Link to={'/contribute'} className={styles.contributeButton}>
			<div className={styles.contributeIcon}>{dashboardCardsData.contribute.details}</div>
		</Link>
	);
}
