import React, { useTransition } from 'react';
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

export default function Co2Chart({ data }) {
	// filter data by year
	const filteredData = data.co2
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

	const { t } = useTranslation();

	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={filteredData}
					syncId="id"
					margin={{
						top: 10,
						right: 20,
						left: 10,
						bottom: 30,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: t('co2.chart.labelX'), position: 'bottom', offset: 17 }}
						padding={{ left: 30, right: 30 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: t('co2.chart.labelY'), angle: -90, position: 'insideLeft', offset: 0 }}
						dataKey="ppm"
						type="number"
						domain={['dataMin', 'auto']}
						tickMargin={5}
					/>
					<Tooltip />
					<Line
						type="monotone"
						dataKey="ppm"
						dot={{ strokeWidth: 2, r: 2 }}
						stroke="#6c8dfa"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
