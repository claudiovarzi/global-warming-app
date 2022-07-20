// data for chart pages
const pagesData = {
	home: {
		title: '(h)Earth',
		subtitle: 'your dashboard on global warming',
	},
	temperature: {
		title: 'Temperature',
		subtitle: 'Global temperature anomalies from year 1880 to present',
		description: `The current global warming rate is not natural,
        from 1880 to 1981 it was (0.07°C / 0.13°F) per decade and since 1981 this rate has increased to (0.18°C / 0.32°F).
        The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F)
        and earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).
        Earth temperature and the proportion of gases such as Co2, methane, and nitrous oxide in the atmosphere is strictly correlated.`,
		link:
			'https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature',
	},
	co2: {
		title: 'Carbon Dioxide',
		subtitle: 'Carbon Dioxide levels from 2012 to present',
		description: `For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm.
        From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation,
        and livestock have increased this amount by more than 30%.`,
		link:
			'https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide',
	},
	methane: {
		title: 'Methane',
		subtitle: 'Methane levels from 1983 to present',
		description: `Methane is a flammable gas formed by geological and biological processes.
		Some of the natural ones are leaks from natural gas systems and wetlands.
		50-65% of total global methane emissions come from human activities, these include:
		livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.
		Methane is a gas with a global warming potential several times stronger than of CO2. For more than 650,000 years, 
		methane concentration in the atmosphere was between 350 - 800 parts per billion (ppb). 
		From the beginning of the industrial revolution, human activities have increased this amount by around 150%.`,
		link: 'https://earthobservatory.nasa.gov/images/146978/methane-emissions-continue-to-rise',
	},
	no2: {
		title: 'Nitrous Oxide ',
		subtitle: 'Nitrous Oxide levels from 2001 to present',
		description: `Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste,
		nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.
		It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying 
		compound emitted by human activities.`,
		link: 'https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide',
	},
	glaciers: {
		title: 'Polar Ice',
		subtitle: 'Arctic sea ice extent since 1979',
		description: `The arctic is warming around twice as fast as global average.
		Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon.
		From 1979 to 1996, we lost 2.2 - 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!
		Another consequence is permafrost thawing. This is a process in which large amounts of methane is released to the atmosphere,
		fueling more the process of global warming.`,
		link: 'https://www.npolar.no/en/themes/climate-change-in-the-arctic/#toggle-id-8',
	},
	contribute: {
		title: 'Contribute with these ten actions',
		subtitle: `Everyone can help limit climate change and global warming. From the way we travel, to the
		electricity we use and the food we eat, we can make a difference. Click on each of these ten actions
		to help tackle the climate crisis.`,
		link: 'https://www.un.org/en/actnow',
	},
};

export default pagesData;
