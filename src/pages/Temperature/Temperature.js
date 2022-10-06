import React from 'react';
import styles from '../PagesStyles.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardBase from '../../components/Cards/CardBase/CardBase';
import TemperatureChart from '../../components/Charts/TemperatureChart/TemperatureChart';
import { fetchData } from '../../clientAPI/fetchData';
import fetchLinks from '../../clientAPI/fetchLinks';
import { useQuery } from '@tanstack/react-query';
import pagesData from '../../data/pagesData';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ApiError from '../../components/ApiError/ApiError';
import { useTranslation } from 'react-i18next';

export default function Temperature() {
	const { isLoading, isError, isSuccess, error, data } = useQuery(['temperatureData'], () =>
		fetchData(fetchLinks.temperature)
	);

	const { t } = useTranslation();

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<CardBase
					showHeader={true}
					title={t('temperature.title')}
					subtitle={t('temperature.subtitle')}
					showContent={true}
					description={t('temperature.description')}
					link={pagesData.temperature.link}
				>
					{isLoading && <LoadingSpinner />}

					{isError && <ApiError error={error} />}

					{isSuccess && <TemperatureChart data={data} />}
				</CardBase>
			</main>
		</>
	);
}
