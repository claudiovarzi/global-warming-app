import Timer from '../components/Timer/Timer';
import ReactPlayer from 'react-player/lazy';
import DashboardChart from '../components/Charts/DashboardChart/DashboardChart';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaSmog } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import { SiMoleculer } from 'react-icons/si';
import { IoIceCreamOutline } from 'react-icons/io5';
import { RiHandHeartLine } from 'react-icons/ri';

// data for homepage cards
const dashboardCardsData = {
	timer: {
		id: 1,
		title: `Time left before it's too late`,
		content: <Timer />,
		description: `to keep global warming to no more than 1.5°C, emissions need to be reduced by 45% by 2030`,
		details: '',
	},
	chart: {
		id: 2,
		title: `Global warming causes (%)`,
		content: <DashboardChart />,
		description: [
			'Energy production',
			'Production of goods',
			'Deforestation',
			'Transportation',
			'Electricity supply for buildings',
			'Other',
		],
		details: `source: US Environmental Protection Agency`,
	},
	video: {
		id: 2,
		title: `Global warming effects`,
		content: (
			<ReactPlayer
				url="https://www.youtube.com/watch?v=G4H1N_yXBiA"
				controls={true}
				width="80%"
				height="80%"
				playing={true}
			/>
		),
		description: '',
		details: 'source: National Geographic',
	},
	data: {
		id: 3,
		title: `Live graphs`,
		content: [
			{
				id: 1,
				title: 'Temperature',
				path: '/temperature',
				icon: <FaTemperatureHigh />,
				backgroundColor: '#f55c7a',
			},
			{
				id: 2,
				title: `Co2`,
				path: '/co2',
				icon: <FaSmog />,
				backgroundColor: '#6c8dfa',
			},
			{
				id: 3,
				title: 'Methane',
				path: '/methane',
				icon: <MdAir />,
				backgroundColor: '#56da65',
			},
			{
				id: 4,
				title: 'no2',
				path: '/no2',
				icon: <SiMoleculer />,
				backgroundColor: '#ff9770',
			},
			{
				id: 5,
				title: 'Glaciers',
				path: '/glaciers',
				icon: <IoIceCreamOutline />,
				backgroundColor: '#63dfe4',
			},
		],
		description: 'source: global-warming.org',
		details: '',
	},
	contribute: {
		id: 4,
		title: `Contribute`,
		content: <RiHandHeartLine />,
		description: 'find out how to help tackle the climate crisis now!',
		details: '',
	},
};

export default dashboardCardsData;
