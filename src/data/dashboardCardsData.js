import Timer from '../components/Timer/Timer';
import DashboardChart from '../components/Charts/DashboardChart/DashboardChart';
import PlayButton from '../components/PlayButton/PlayButton';
import CausesList from '../components/CausesList/CausesList';
import ChartSelector from '../components/ChartSelector/ChartSelector';
import ContributeButton from '../components/ContributeButton/ContributeButton';
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
		secondContent: <CausesList />,
		description: `source: US Environmental Protection Agency`,
		details: [
			'Energy production',
			'Production of goods',
			'Deforestation',
			'Transportation',
			'Electricity supply for buildings',
			'Other',
		],
		link: 'https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data',
	},
	video: {
		id: 2,
		title: `Global warming effects`,
		content: <PlayButton />,
		description: 'source: National Geographic',
		details: '',
		link: 'https://www.nationalgeographic.com/environment/article/global-warming-effects',
	},
	data: {
		id: 3,
		title: `Live graphs`,
		content: <ChartSelector />,
		description: 'source: global-warming.org',
		link: 'https://global-warming.org/',
		details: [
			{
				id: 1,
				title: 'Temperature',
				path: '/temperature',
				icon: <FaTemperatureHigh />,
				backgroundColor: '#f55c7a',
			},
			{
				id: 2,
				title: `CO2`,
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
				title: 'NO2',
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
	},
	contribute: {
		id: 4,
		title: `Contribute`,
		content: <ContributeButton />,
		description: 'find out how to help tackle the climate crisis now!',
		details: <RiHandHeartLine />,
	},
	accordion_1: {
		id: 5,
		title: `What is global warming ?`,
		content: `Global warming or "climate change" refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures.`,
		description: `source: United Nations`,
		details: '',
		link: 'https://www.un.org/en/climatechange/what-is-climate-change',
	},
	accordion_2: {
		id: 5,
		title: `What are greenhouse gasses ?`,
		content: `Gases that trap heat in the atmosphere are called greenhouse gases. The primary greenhouse gases in Earth's atmosphere are water vapor (H2O), carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and ozone (O3). Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and forests can also release carbon dioxide. Landfills for garbage are a major source of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main emitters.`,
		description: `source: US Environmental Protection Agency`,
		details: '',
		link: 'https://www.epa.gov/ghgemissions/overview-greenhouse-gases#overview',
	},
};

export default dashboardCardsData;
