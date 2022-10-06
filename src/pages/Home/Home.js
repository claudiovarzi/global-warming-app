import React from 'react';
import styles from './Home.module.css';
import logo from '../../assets/img/logo.svg';
import Sidebar from '../../components/Sidebar/Sidebar';
import dashboardCardsData from '../../data/dashboardCardsData';
import useMediaQueryHook from '../../hooks/useMediaQueryHook';
import PageHeader from '../../components/PageHeader/PageHeader';
import DashboardCard from '../../components/Cards/DashboardCard/DashboardCard';
import AccordionCard from '../../components/Cards/AccordionCard/AccordionCard';
import { useTranslation } from 'react-i18next';
import 'animate.css';

export default function Home() {
	const { isDesktopOrLaptopOrTablet, isMobile } = useMediaQueryHook();

	const { t } = useTranslation();

	return (
		<div className={styles.home}>
			{/* Sidebar */}
			<Sidebar />

			{/* Desktop-Laptop-Tablet header UI */}
			{isDesktopOrLaptopOrTablet && (
				<PageHeader showHeader={false}>
					<header className={styles.header}>
						<img src={logo} className={styles.logo} alt="logo" />
						<h1 style={{ marginRight: '20px', fontWeight: '500' }}>{t('home.title')}</h1>
						<p style={{ paddingTop: '10px', color: '#6c757d' }}>{t('home.subtitle')}</p>
					</header>
				</PageHeader>
			)}

			{/* Mobile header UI */}
			{isMobile && (
				<PageHeader
					showHeader={true}
					showLogo={true}
					title={t('home.title')}
					subtitle={t('home.subtitle')}
				/>
			)}

			{/* Dashboard */}
			<main className={styles.main}>
				{/* Accordion_1 */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInDown`}>
					<AccordionCard
						title={t('home.dashboard.accordion_1.title')}
						content={t('home.dashboard.accordion_1.content')}
						description={t('home.dashboard.accordion_1.description')}
						link={dashboardCardsData.accordion_1.link}
					/>
				</div>

				{/* Accordion_2 */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInDown`}>
					<AccordionCard
						title={t('home.dashboard.accordion_2.title')}
						content={t('home.dashboard.accordion_2.content')}
						description={t('home.dashboard.accordion_2.description')}
						link={dashboardCardsData.accordion_2.link}
					/>
				</div>

				{/* Chart card */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInLeft`}>
					<DashboardCard
						title={t('home.dashboard.chart.title')}
						description={t('home.dashboard.chart.description')}
						link={dashboardCardsData.chart.link}
					>
						{dashboardCardsData.chart.content}
						{dashboardCardsData.chart.secondContent}
					</DashboardCard>
				</div>

				{/* Video card */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInRight`}>
					<DashboardCard
						title={t('home.dashboard.video.title')}
						description={t('home.dashboard.video.description')}
						link={dashboardCardsData.video.link}
					>
						{dashboardCardsData.video.content}
					</DashboardCard>
				</div>

				{/* Data card */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInLeft`}>
					<DashboardCard
						title={t('home.dashboard.data.title')}
						description={t('home.dashboard.data.description')}
						link={dashboardCardsData.data.link}
					>
						{dashboardCardsData.data.content}
					</DashboardCard>
				</div>

				{/* Timer card */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInLeft`}>
					<DashboardCard
						title={t('home.dashboard.timer.title')}
						description={t('home.dashboard.timer.description')}
						link={false}
					>
						{dashboardCardsData.timer.content}
					</DashboardCard>
				</div>

				{/* Contribute card */}
				<div className={`${styles.cardContainer} animate__animated animate__fadeInRight`}>
					<DashboardCard
						title={t('home.dashboard.contribute.title')}
						description={t('home.dashboard.contribute.description')}
						link={false}
					>
						{dashboardCardsData.contribute.content}
					</DashboardCard>
				</div>
			</main>
		</div>
	);
}
