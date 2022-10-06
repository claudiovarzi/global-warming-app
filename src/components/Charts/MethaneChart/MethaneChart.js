import React from 'react';
import styles from '../ChartStyles.module.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */
import { useTranslation } from 'react-i18next';

export default function MethaneChart({ data }) {
	// filter data by year
	const filteredData = data.methane
		.filter((object) => object.date.includes('.7'))
		.map((object) => {
			return {
				year: object.date.replace('.7', ''),
				ppb: object.average,
			};
		});

	const { t } = useTranslation();

	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={filteredData}
					syncId="id"
					margin={{
						top: 10,
						right: 30,
						left: 10,
						bottom: 30,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: t('methane.chart.labelX'), position: 'bottom', offset: 17 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: t('methane.chart.labelY'), angle: -90, position: 'insideLeft', offset: 0 }}
						dataKey="ppb"
						type="number"
						domain={['dataMin', 'auto']}
						tickMargin={5}
					/>
					<Tooltip />
					<Bar type="monotone" dataKey="ppb" fill="#56da65" barSize={12} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
