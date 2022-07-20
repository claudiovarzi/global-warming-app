import React from 'react';
import styles from './Temperature.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import TemperatureChart from '../../components/Charts/TemperatureChart/TemperatureChart';
import ApiError from '../../components/ApiError/ApiError';
import PageContent from '../../components/PageContent/PageContent';
import useFetch from '../../hooks/useFetch';
import fetchLinks from '../../data/fetchLinks';
import pagesData from '../../data/pagesData';

export default function Temperature() {
	// fetch data with custom hook
	const { data, error } = useFetch(fetchLinks.temperature);
	const { result } = data;

	// filter data by year
	const filteredData = result
		.filter((object) => object.time.includes('.04'))
		.map((object) => {
			return {
				time: object.time.replace('.04', ''),
				temperature: object.station,
			};
		});

	// if API call has errors renders a message instead of chart
	const currentUI = error ? (
		<ApiError errorType={error} />
	) : (
		<TemperatureChart data={filteredData} />
	);

	//console.log(filteredData);

	return (
		<main className={styles.main}>
			<PageHeader title={pagesData.temperature.title} subtitle={pagesData.temperature.subtitle} />
			{currentUI}
			<PageContent description={pagesData.temperature.description} link={pagesData.temperature.link} />
		</main>
	);
}
