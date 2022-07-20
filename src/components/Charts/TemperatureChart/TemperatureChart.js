import React from 'react';
import styles from './TemperatureChart.module.css';
import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */

export default function TemperatureChart(props) {
	// chart area color offset
	const gradientOffset = () => {
		const dataMax = Math.max(...props.data.map((i) => i.temperature));
		const dataMin = Math.min(...props.data.map((i) => i.temperature));

		if (dataMax <= 0) {
			return 0;
		}
		if (dataMin >= 0) {
			return 1;
		}

		return dataMax / (dataMax - dataMin);
	};

	const off = gradientOffset();

	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={props.data}
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
						label={{ value: 'Year', position: 'bottom', offset: 18 }}
						dataKey="time"
						angle={-45}
						interval={19}
						tickMargin={20}
					/>
					<YAxis
						label={{ value: '° Celsius', angle: -90, position: 'insideLeft', offset: 10 }}
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
