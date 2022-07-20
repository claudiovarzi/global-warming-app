import React from 'react';
import { HiOutlineTemplate } from 'react-icons/hi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaSmog } from 'react-icons/fa';
import { MdAir } from 'react-icons/md';
import { SiMoleculer } from 'react-icons/si';
import { IoIceCreamOutline } from 'react-icons/io5';
import { RiHandHeartLine } from 'react-icons/ri';

// data for sidebar
export const sidebarData = [
	{
		id: 1,
		title: 'home',
		path: '/',
		icon: <HiOutlineTemplate />,
	},
	{
		id: 2,
		title: 'temperature',
		path: '/temperature',
		icon: <FaTemperatureHigh />,
	},
	{
		id: 3,
		title: 'co2',
		path: '/co2',
		icon: <FaSmog />,
	},
	{
		id: 4,
		title: 'methane',
		path: '/methane',
		icon: <MdAir />,
	},
	{
		id: 5,
		title: 'no2',
		path: '/no2',
		icon: <SiMoleculer />,
	},
	{
		id: 6,
		title: 'glaciers',
		path: '/glaciers',
		icon: <IoIceCreamOutline />,
	},
	{
		id: 7,
		title: 'contribute',
		path: '/contribute',
		icon: <RiHandHeartLine />,
	},
];
