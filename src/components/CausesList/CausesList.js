import React from 'react';
import styles from './CausesList.module.css';
import dashboardCardsData from '../../data/dashboardCardsData';
import { useTranslation } from 'react-i18next';

export default function CausesList() {
	const { t } = useTranslation();
	// creating li elements
	const warmingCauses = dashboardCardsData.chart.details.map((cause, index) => {
		return (
			<li key={index} className={styles.listItem}>
				{t(`home.dashboard.chart.details.${index}`)}
			</li>
		);
	});

	return <ul className={styles.causesList}>{warmingCauses}</ul>;
}
