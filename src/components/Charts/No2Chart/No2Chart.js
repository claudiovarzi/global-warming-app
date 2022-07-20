import React from 'react';
import styles from './No2Chart.module.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */

export default function No2Chart(props) {
	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={props.data}
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
						label={{ value: 'Year', position: 'bottom', offset: 18 }}
						dataKey="year"
						angle={-45}
						tickMargin={15}
					/>
					<YAxis
						label={{ value: 'ppb', angle: -90, position: 'insideLeft', offset: 0 }}
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
						stroke="#56da65"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
