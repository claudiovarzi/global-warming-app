import React from 'react';
import styles from '../ChartStyles.module.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */
import { useTranslation } from 'react-i18next';

export default function No2Chart({ data }) {
	// filter data by year
	const filteredData = data.nitrous
		.filter((object) => object.date.includes('.3'))
		.map((object) => {
			return {
				year: object.date.replace('.3', ''),
				ppb: object.average,
			};
		});

	const { t } = useTranslation();

	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
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
						label={{ value: t('no2.chart.labelX'), position: 'bottom', offset: 17 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: t('no2.chart.labelY'), angle: -90, position: 'insideLeft', offset: 0 }}
						dataKey="ppb"
						type="number"
						domain={['dataMin', 'auto']}
						tickMargin={5}
					/>
					<Tooltip />
					<Line
						type="monotone"
						dataKey="ppb"
						dot={{ strokeWidth: 2, r: 2 }}
						stroke="#ff9770"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
