import React from 'react';
import styles from '../PagesStyles.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardBase from '../../components/Cards/CardBase/CardBase';
import MethaneChart from '../../components/Charts/MethaneChart/MethaneChart';
import ApiError from '../../components/ApiError/ApiError';
import pagesData from '../../data/pagesData';
import { fetchData } from '../../clientAPI/fetchData';
import fetchLinks from '../../clientAPI/fetchLinks';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

export default function Methane() {
	const { isLoading, isError, isSuccess, error, data } = useQuery(['MethaneData'], () =>
		fetchData(fetchLinks.methane)
	);

	const { t } = useTranslation();

	return (
		<>
			<Sidebar />
			<main className={styles.main}>
				<CardBase
					showHeader={true}
					title={t('methane.title')}
					subtitle={t('methane.subtitle')}
					showContent={true}
					description={t('methane.description')}
					link={pagesData.methane.link}
				>
					{isLoading && <LoadingSpinner />}

					{isError && <ApiError error={error} />}

					{isSuccess && <MethaneChart data={data} />}
				</CardBase>
			</main>
		</>
	);
}
