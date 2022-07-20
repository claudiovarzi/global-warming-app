import React from 'react';
import styles from './Co2.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Co2Chart from '../../components/Charts/Co2Chart/Co2Chart';
import ApiError from '../../components/ApiError/ApiError';
import PageContent from '../../components/PageContent/PageContent';
import useFetch from '../../hooks/useFetch';
import fetchLinks from '../../data/fetchLinks';
import pagesData from '../../data/pagesData';

export default function Co2() {
	// fetch data with custom hook
	const { data, error } = useFetch(fetchLinks.co2);
	const { co2 } = data;

	// filter data by year
	const filteredData = co2
		.filter((object) => {
			if (object.month === '1' && object.day === '1') {
				return object;
			}
		})
		.map((object) => {
			return {
				year: object.year,
				ppm: object.trend,
			};
		});

	// if API call has errors renders a message instead of chart
	const currentUI = error ? <ApiError errorType={error} /> : <Co2Chart data={filteredData} />;

	//console.log(filteredData);

	return (
		<main className={styles.main}>
			<PageHeader title={pagesData.co2.title} subtitle={pagesData.co2.subtitle} />
			{currentUI}
			<PageContent description={pagesData.co2.description} link={pagesData.co2.link} />
		</main>
	);
}
