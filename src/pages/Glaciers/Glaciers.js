import React from 'react';
import styles from './Glaciers.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
import GlaciersChart from '../../components/Charts/GlaciersChart/GlaciersChart';
import ApiError from '../../components/ApiError/ApiError';
import useFetch from '../../hooks/useFetch';
import fetchLinks from '../../data/fetchLinks';
import pagesData from '../../data/pagesData';

export default function Glaciers() {
	// fetch data with custom hook
	const { data, error } = useFetch(fetchLinks.glaciers);
	const { arcticData } = data;

	// filter data by year
	const filteredData = arcticData.map((object) => {
		return {
			year: object.year,
			extent: object.extent,
			area: object.area,
		};
	});

	// if API call has errors renders a message instead of chart
	const currentUI = error ? <ApiError errorType={error} /> : <GlaciersChart data={filteredData} />;

	console.log(filteredData);

	return (
		<main className={styles.main}>
			<PageHeader title={pagesData.glaciers.title} subtitle={pagesData.glaciers.subtitle} />
			{currentUI}
			<PageContent description={pagesData.glaciers.description} link={pagesData.glaciers.link} />
		</main>
	);
}
