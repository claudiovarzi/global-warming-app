import React from 'react';
import styles from './GlaciersChart.module.css';
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

export default function GlaciersChart(props) {
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
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: 'Year', position: 'bottom', offset: 18 }}
						dataKey="year"
						angle={-45}
						tickMargin={20}
					/>
					<YAxis
						label={{ value: 'Million sq km', angle: -90, position: 'insideLeft', offset: 10 }}
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
