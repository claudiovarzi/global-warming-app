import React from 'react';
import styles from './Timer.module.css';

export default function Timer() {
	// timer states
	const [timerYear, setTimerYears] = React.useState('00');
	const [timerMonths, setTimerMonths] = React.useState('00');
	const [timerDays, setTimerDays] = React.useState('00');
	const [timerHours, setTimerHours] = React.useState('00');
	const [timerMinutes, setTimerMinutes] = React.useState('00');
	const [timerSeconds, setTimerSeconds] = React.useState('00');

	const startTimer = () => {
		// global emission cut countdown date
		const countDownDate = new Date('Jan 01 2030 00:00:00').getTime();

		window.timeInterval = setInterval(() => {
			const nowDate = new Date().getTime();
			const timeDistance = countDownDate - nowDate;

			// 1 month = 2629800000 ms
			const updatedYears = Math.floor(timeDistance / (2629800000 * 12));
			const updatedMonths = Math.floor((timeDistance % (2629800000 * 12)) / 2629800000);
			const updatedDays = Math.floor((timeDistance % 2629800000) / (1000 * 60 * 60 * 24));
			const updatedHours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const updatedMinutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
			const updatedSeconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

			if (timeDistance < 0) {
				clearInterval(window.timeInterval);
			} else {
				setTimerYears(updatedYears);
				setTimerMonths(updatedMonths);
				setTimerDays(updatedDays);
				setTimerHours(updatedHours);
				setTimerMinutes(updatedMinutes);
				setTimerSeconds(updatedSeconds);
			}
		}, 1000);
	};

	React.useEffect(() => {
		startTimer();
		return () => {
			clearInterval(window.timeInterval);
		};
	});

	return (
		<div className={styles.timer}>
			<p className={styles.years}>{timerYear}y :</p>
			<p className={styles.months}>{timerMonths}m :</p>
			<p className={styles.days}>{timerDays}d :</p>
			<p className={styles.hours}>{timerHours}h :</p>
			<p className={styles.minutes}>{timerMinutes}m :</p>
			<p className={styles.seconds}>{timerSeconds}s</p>
		</div>
	);
}
