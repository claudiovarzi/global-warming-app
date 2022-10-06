import React from 'react';
import styles from './Contribute.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import pagesData from '../../data/pagesData';
import FlipCard from '../../components/Cards/FlipCard/FlipCard';
import flipCardsData from '../../data/flipCardsData';
import InfoButton from '../../components/InfoButton/InfoButton';
import { useTranslation } from 'react-i18next';

export default function Contribute() {
	const { t } = useTranslation();
	// creating cards
	const cards = flipCardsData.map((item, index) => {
		return (
			<FlipCard
				key={item.id}
				title={t(`contribute.flipCard.title.${index}`)}
				icon={item.icon}
				description={t(`contribute.flipCard.description.${index}`)}
				iconColor={item.iconColor}
				isFlipCard={true}
			/>
		);
	});

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<h1 className={styles.title}>{t('contribute.title')}</h1>
				<p className={styles.subtitle}>{t('contribute.subtitle')}</p>
				<section className={styles.cardGrid}>{cards}</section>
				<InfoButton link={pagesData.contribute.link} />
			</main>
		</>
	);
}
