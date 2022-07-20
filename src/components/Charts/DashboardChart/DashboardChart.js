import React from 'react';
import styles from './DashboardChart.module.css';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
} from 'recharts'; /* chart library (https://recharts.org/en-US) */

// chart data
const data = [
	{ name: 'Energy production', value: 25 },
	{ name: 'Production of goods', value: 21 },
	{ name: 'Deforestation', value: 24 },
	{ name: 'transportation', value: 14 },
	{ name: 'Electricity supply for buildings', value: 6 },
	{ name: 'Other', value: 10 },
];

// chart color
const COLORS = ['#8675ff', '#63dfe4', '#ff9770', '#6c8dfa', '#f55c7a', '#56da65'];

export default function DashboardChart() {
	return (
		<div className={styles.chartContainer}>
			<ResponsiveContainer width="100%" height={250}>
				<PieChart>
					<Pie
						data={data}
						cx="20%"
						cy="45%"
						startAngle={90}
						endAngle={-90}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						paddingAngle={2}
						dataKey="value"
						label
					>
						{/* set pie chart cells of different colors */}
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
