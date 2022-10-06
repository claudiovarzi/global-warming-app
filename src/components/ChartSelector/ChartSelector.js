import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChartSelector.module.css';
import dashboardCardsData from '../../data/dashboardCardsData';
import { useTranslation } from 'react-i18next';

export default function ChartSelector() {
	const { t } = useTranslation();
	// creating cards
	const dataCards = dashboardCardsData.data.details.map((data, index) => {
		return (
			<Link to={data.path} key={data.id}>
				<li className={styles.graphLink} style={{ backgroundColor: data.backgroundColor }}>
					<span className={styles.dataTitle}>{t(`home.dashboard.data.chartSelector.${index}`)}</span>
					{data.icon}
				</li>
			</Link>
		);
	});

	return <ul className={styles.graphMenu}>{dataCards}</ul>;
}
