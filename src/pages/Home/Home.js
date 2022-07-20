import React from 'react';
import styles from './Home.module.css';
import pagesData from '../../data/pagesData';
import PageHeader from '../../components/PageHeader/PageHeader';
import useMediaQueryHook from '../../hooks/useMediaQueryHook';
import TimerCard from '../../components/Cards/TimerCard/TimerCard';
import ChartCard from '../../components/Cards/ChartCard/ChartCard';
import VideoCard from '../../components/Cards/VideoCard/VideoCard';
import DataCard from '../../components/Cards/DataCard/DataCard';
import ContributeCard from '../../components/Cards/ContributeCard/ContributeCard';

export default function Home() {
	const { isDesktopOrLaptopOrTablet, isMobile } = useMediaQueryHook();

	return (
		<div className={styles.home}>
			{/* Desktop-laptop-tablet header UI */}
			{isDesktopOrLaptopOrTablet && (
				<header className={styles.header}>
					<h1 className={styles.title}>{pagesData.home.title}</h1>
					<p className={styles.subtitle}>{pagesData.home.subtitle}</p>
				</header>
			)}
			{/* Mobile header UI */}
			{isMobile && <PageHeader title={pagesData.home.title} subtitle={pagesData.home.subtitle} />}
			{/* page content */}
			<main className={styles.main}>
				<div className={styles.dashboardGrid}>
					<TimerCard />
					<div className={styles.cardContainer}>
						<ChartCard />
						<VideoCard />
					</div>
					<div className={styles.secondCardsRow}>
						<DataCard />
						<ContributeCard />
					</div>
				</div>
			</main>
		</div>
	);
}
