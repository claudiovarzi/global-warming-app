import React from 'react';
import styles from './VideoCard.module.css';
import dashboardCardsData from '../../../data/dashboardCardsData';
import background from '../../../assets/img/bear.png';
import { GoPlay } from 'react-icons/go';
import 'animate.css';

export default function VideoCard() {
	const [isPlaying, setIsPlaying] = React.useState(false);

	const inlineStyles = {
		background: `#fff url(${background}) no-repeat`,
		backgroundSize: '250px',
		backgroundPosition: 'center',
	};

	function playVideo() {
		setIsPlaying(true);
	}

	const currentUI = isPlaying ? (
		dashboardCardsData.video.content
	) : (
		<div className={styles.playButtonContainer}>
			<span className={styles.playButton} onClick={playVideo}>
				<GoPlay />
			</span>
			<span className={`${styles.borderAnimation} ${styles.firstBorder}`}></span>
			<span className={`${styles.borderAnimation} ${styles.secondBorder}`}></span>
		</div>
	);

	console.log(isPlaying);

	return (
		<div
			className={`${styles.videoCard} animate__animated animate__fadeInRight`}
			style={inlineStyles}
		>
			<h3 className={styles.title}>{dashboardCardsData.video.title}</h3>
			{currentUI}
		</div>
	);
}
