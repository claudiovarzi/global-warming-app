import React from 'react';
import styles from '../PagesStyles.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardBase from '../../components/Cards/CardBase/CardBase';
import Co2Chart from '../../components/Charts/Co2Chart/Co2Chart';
import ApiError from '../../components/ApiError/ApiError';
import pagesData from '../../data/pagesData';
import { fetchData } from '../../clientAPI/fetchData';
import fetchLinks from '../../clientAPI/fetchLinks';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

export default function Co2() {
	const { isLoading, isError, isSuccess, error, data } = useQuery(['co2Data'], () =>
		fetchData(fetchLinks.co2)
	);

	const { t } = useTranslation();

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<CardBase
					showHeader={true}
					title={t('co2.title')}
					subtitle={t('co2.subtitle')}
					showContent={true}
					description={t('co2.description')}
					link={pagesData.co2.link}
				>
					{isLoading && <LoadingSpinner />}

					{isError && <ApiError error={error} />}

					{isSuccess && <Co2Chart data={data} />}
				</CardBase>
			</main>
		</>
	);
}
