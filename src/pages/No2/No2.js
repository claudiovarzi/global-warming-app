import React from 'react';
import styles from '../PagesStyles.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardBase from '../../components/Cards/CardBase/CardBase';
import No2Chart from '../../components/Charts/No2Chart/No2Chart';
import ApiError from '../../components/ApiError/ApiError';
import pagesData from '../../data/pagesData';
import { fetchData } from '../../clientAPI/fetchData';
import fetchLinks from '../../clientAPI/fetchLinks';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

export default function No2() {
	const { isLoading, isError, isSuccess, error, data } = useQuery(['no2Data'], () =>
		fetchData(fetchLinks.no2)
	);

	const { t } = useTranslation();

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<CardBase
					showHeader={true}
					title={t('no2.title')}
					subtitle={t('no2.subtitle')}
					showContent={true}
					description={t('no2.description')}
					link={pagesData.no2.link}
				>
					{isLoading && <LoadingSpinner />}

					{isError && <ApiError error={error} />}

					{isSuccess && <No2Chart data={data} />}
				</CardBase>
			</main>
		</>
	);
}
