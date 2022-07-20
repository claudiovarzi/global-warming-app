import { TbPlugConnected } from 'react-icons/tb';
import { MdPedalBike } from 'react-icons/md';
import { FaCarrot } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import { MdFoodBank } from 'react-icons/md';
import { FaRecycle } from 'react-icons/fa';
import { FaSolarPanel } from 'react-icons/fa';
import { MdElectricCar } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiUserVoice } from 'react-icons/bi';

// data for contribute page cards
const flipCardsData = [
	{
		id: 1,
		title: 'Save energy at home',
		icon: <TbPlugConnected />,
		iconColor: '#8675ff',
		description: `Much of our electricity and heat are powered by coal, oil and gas.
		Use less energy by lowering your heating and cooling, switching to LED light bulbs
		and energy-efficient electric appliances, washing your laundry with cold water,
		or hanging things to dry instead of using a dryer.`,
	},
	{
		id: 2,
		title: 'Walk, bike, or take public transport',
		icon: <MdPedalBike />,
		iconColor: '#63dfe4',
		description: `The world’s roadways are clogged with vehicles, most of them burning
		diesel or gasoline. Walking or riding a bike instead of driving will reduce greenhouse
		gas emissions and help your health and fitness. For longer distances, consider taking a train or bus.
		And carpool whenever possible.`,
	},
	{
		id: 3,
		title: 'Eat more vegetables',
		icon: <FaCarrot />,
		iconColor: '#ff9770',
		description: `Eating more vegetables, fruits, whole grains, legumes, nuts, and seeds, and less meat and dairy,
		can significantly lower your environmental impact. Producing plant-based foods generally results in fewer greenhouse
		gas emissions and requires less energy, land, and water.`,
	},
	{
		id: 4,
		title: 'Consider your travel',
		icon: <MdTravelExplore />,
		iconColor: '#6c8dfa',
		description: `Airplanes burn large amounts of fossil fuels, producing significant greenhouse gas emissions.
		That makes taking fewer flights one of the fastest ways to reduce your environmental impact.
		When you can, meet virtually, take a train, or skip that long-distance trip altogether.`,
	},
	{
		id: 5,
		title: 'Throw away less food',
		icon: <MdFoodBank />,
		iconColor: '#f55c7a',
		description: `When you throw food away, you're also wasting the resources and energy that were used to grow, produce,
		package, and transport it. And when food rots in a landfill, it produces methane, a powerful greenhouse gas.
		So use what you buy and compost any leftovers.`,
	},
	{
		id: 6,
		title: 'Reduce, reuse, repair & recycle',
		icon: <FaRecycle />,
		iconColor: '#56da65',
		description: `Electronics, clothes, and other items we buy cause carbon emissions at each point in production,
		from the extraction of raw materials to manufacturing and transporting goods to market.
		To protect our climate, buy fewer things, shop second-hand, repair what you can, and recycle.`,
	},
	{
		id: 7,
		title: `Change your home's source of energy`,
		icon: <FaSolarPanel />,
		iconColor: '#8675ff',
		description: `Ask your utility company if your home energy comes from oil, coal or gas.
		If possible, see if you can switch to renewable sources such as wind or solar.
		Or install solar panels on your roof to generate energy for your home.`,
	},
	{
		id: 8,
		title: 'Switch to an electric vehicle',
		icon: <MdElectricCar />,
		iconColor: '#63dfe4',
		description: `If you plan to buy a car, consider going electric, with more and cheaper models coming on the market.
		Even if they still run on electricity produced from fossil fuels, electric cars help reduce air pollution and cause
		significantly fewer greenhouse gas emissions than gas or diesel-powered vehicles.`,
	},
	{
		id: 9,
		title: 'Choose eco-friendly products',
		icon: <HiOutlineShoppingCart />,
		iconColor: '#ff9770',
		description: `Everything we spend money on affects the planet. You have the power to choose which goods and services you support.
		To reduce your environmental impact, buy local and seasonal foods, and choose products from companies who use resources responsibly
		and are committed to cutting their gas emissions and waste.`,
	},
	{
		id: 10,
		title: 'Speak up',
		icon: <BiUserVoice />,
		iconColor: '#6c8dfa',
		description: `Speak up and get others to join in taking action. It's one of the quickest and most effective ways to make a difference.
		Talk to your neighbors, colleagues, friends, and family. Let business owners know you support bold changes.
		Appeal to local and world leaders to act now.`,
	},
];

export default flipCardsData;
