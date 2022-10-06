import React from 'react';
import styles from '../ChartStyles.module.css';
import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
	Legend,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */
import { useTranslation } from 'react-i18next';

export default function GlaciersChart({ data }) {
	// filter data by year
	const filteredData = data.arcticData.map((object) => {
		return {
			year: object.year,
			extent: object.extent,
			area: object.area,
		};
	});

	const { t } = useTranslation();

	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={filteredData}
					syncId="id"
					margin={{
						top: 10,
						right: 30,
						left: 2,
						bottom: 30,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: t('glaciers.chart.labelX'), position: 'bottom', offset: 17 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: t('glaciers.chart.labelY'), angle: -90, position: 'insideLeft', offset: 10 }}
						tickMargin={10}
					/>
					<Tooltip />
					<Legend verticalAlign="top" height={36} />
					<Area
						type="monotone"
						dataKey="extent"
						stroke=""
						fill="#63dfe4"
						dot={{ stroke: '#000', r: 0.5 }}
					/>
					<Area
						type="monotone"
						dataKey="area"
						stroke=""
						fill="#6c8dfa"
						dot={{ stroke: '#000', r: 0.5 }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
