import React from 'react';
import styles from './Co2Chart.module.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */

export default function Co2Chart(props) {
	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={props.data}
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
						label={{ value: 'Year', position: 'bottom', offset: 19 }}
						padding={{ left: 30, right: 30 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: 'ppm', angle: -90, position: 'insideLeft', offset: 0 }}
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
						stroke="#ff9770"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
