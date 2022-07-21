import React from 'react';
import styles from './MethaneChart.module.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */

export default function MethaneChart(props) {
	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
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
						label={{ value: 'Year', position: 'bottom', offset: 19 }}
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
					<Bar type="monotone" dataKey="ppm" fill="#8675ff" barSize={12} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
