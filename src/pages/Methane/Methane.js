import React from 'react';
import styles from './Methane.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import MethaneChart from '../../components/Charts/MethaneChart/MethaneChart';
import ApiError from '../../components/ApiError/ApiError';
import PageContent from '../../components/PageContent/PageContent';
import useFetch from '../../hooks/useFetch';
import fetchLinks from '../../data/fetchLinks';
import pagesData from '../../data/pagesData';

export default function Methane() {
	// fetch data with custom hook
	const { data, error } = useFetch(fetchLinks.methane);
	const { methane } = data;

	// filter data by year
	const filteredData = methane
		.filter((object) => object.date.includes('.7'))
		.map((object) => {
			return {
				year: object.date.replace('.7', ''),
				ppm: object.average,
			};
		});

	// if API call has errors renders a message instead of chart
	const currentUI = error ? <ApiError errorType={error} /> : <MethaneChart data={filteredData} />;

	// console.log(filteredData);

	return (
		<main className={styles.main}>
			<PageHeader title={pagesData.methane.title} subtitle={pagesData.methane.subtitle} />
			{currentUI}
			<PageContent description={pagesData.methane.description} link={pagesData.methane.link} />
		</main>
	);
}
