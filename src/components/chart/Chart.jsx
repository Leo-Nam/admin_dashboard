import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function chart() {
	const data = [
		{
			name: 'Jan 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Feb 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Mar 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Apr 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'May 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Jul 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Jun 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Aug 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Sep 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Oct 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Nov 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
		{
			name: 'Dec 2022',
			"Active User": Math.floor(Math.random() * 7000 + 3000),
		},
	];
	
	return (
		<div className="chart">
			<h3 className="chartTitle">User Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey="Active User" stroke="#5550bd" />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

