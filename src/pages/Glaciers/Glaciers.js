import React from 'react';
import styles from '../PagesStyles.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardBase from '../../components/Cards/CardBase/CardBase';
import GlaciersChart from '../../components/Charts/GlaciersChart/GlaciersChart';
import ApiError from '../../components/ApiError/ApiError';
import pagesData from '../../data/pagesData';
import { fetchData } from '../../clientAPI/fetchData';
import fetchLinks from '../../clientAPI/fetchLinks';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

export default function Glaciers() {
	const { isLoading, isError, isSuccess, error, data } = useQuery(['glaciersData'], () =>
		fetchData(fetchLinks.glaciers)
	);

	const { t } = useTranslation();

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<CardBase
					showHeader={true}
					title={t('glaciers.title')}
					subtitle={t('glaciers.subtitle')}
					showContent={true}
					description={t('glaciers.description')}
					link={pagesData.glaciers.link}
				>
					{isLoading && <LoadingSpinner />}

					{isError && <ApiError error={error} />}

					{isSuccess && <GlaciersChart data={data} />}
				</CardBase>
			</main>
		</>
	);
}
