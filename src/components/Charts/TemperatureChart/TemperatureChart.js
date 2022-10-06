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
} from 'recharts'; /* chart library (https://recharts.org/en-US) */
import { useTranslation } from 'react-i18next';

export default function TemperatureChart({ data }) {
	// filter data by year
	const filteredData = data.result
		.filter((object) => object.time.includes('.04'))
		.map((object) => {
			return {
				time: object.time.replace('.04', ''),
				temperature: object.station,
			};
		});

	// chart area color offset
	const gradientOffset = () => {
		const dataMax = Math.max(...filteredData.map((i) => i.temperature));
		const dataMin = Math.min(...filteredData.map((i) => i.temperature));

		if (dataMax <= 0) {
			return 0;
		}
		if (dataMin >= 0) {
			return 1;
		}

		return dataMax / (dataMax - dataMin);
	};

	const off = gradientOffset();

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
					{/* set negative values blue and positive red */}
					<defs>
						<linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
							<stop offset={off} stopColor="#f87575" stopOpacity={1} />
							<stop offset={off} stopColor="#5c95ff" stopOpacity={1} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: t('temperature.chart.labelX'), position: 'bottom', offset: 17 }}
						dataKey="time"
						angle={-35}
						interval={19}
						tickMargin={10}
					/>
					<YAxis
						label={{
							value: t('temperature.chart.labelY'),
							angle: -90,
							position: 'insideLeft',
							offset: 10,
						}}
						dataKey="temperature"
						type="number"
						domain={['dataMin - 1.49', 'auto']}
						allowDataOverflow={true}
						allowDecimals={false}
						tickMargin={10}
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="temperature"
						dot={{ stroke: '#000', r: 0.5 }}
						stroke=""
						fill="url(#splitColor)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
