import React from 'react';
import styles from './No2.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import No2Chart from '../../components/Charts/No2Chart/No2Chart';
import PageContent from '../../components/PageContent/PageContent';
import ApiError from '../../components/ApiError/ApiError';
import useFetch from '../../hooks/useFetch';
import fetchLinks from '../../data/fetchLinks';
import pagesData from '../../data/pagesData';

export default function No2() {
	// fetch data with custom hook
	const { data, error } = useFetch(fetchLinks.no2);
	const { nitrous } = data;

	// filter data by year
	const filteredData = nitrous
		.filter((object) => object.date.includes('.3'))
		.map((object) => {
			return {
				year: object.date.replace('.3', ''),
				ppb: object.average,
			};
		});

	// if API call has errors renders a message instead of chart
	const currentUI = error ? <ApiError errorType={error} /> : <No2Chart data={filteredData} />;

	//console.log(filteredData);

	return (
		<main className={styles.main}>
			<PageHeader title={pagesData.no2.title} subtitle={pagesData.no2.subtitle} />
			{currentUI}
			<PageContent description={pagesData.no2.description} link={pagesData.no2.link} />
		</main>
	);
}
