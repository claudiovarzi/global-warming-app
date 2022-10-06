import React from 'react';
import styles from './PlayButton.module.css';
import ReactPlayer from 'react-player/lazy';
import { GoPlay } from 'react-icons/go';

export default function PlayButton() {
	const [isPlaying, setIsPlaying] = React.useState(false);

	function playVideo() {
		setIsPlaying(true);
	}

	const currentUI = isPlaying ? (
		<ReactPlayer
			url="https://www.youtube.com/watch?v=G4H1N_yXBiA"
			controls={true}
			width="100%"
			height="100%"
			playing={true}
		/>
	) : (
		<div className={styles.playButtonContainer}>
			<span className={styles.playButton} onClick={playVideo}>
				<GoPlay />
			</span>
			<span className={`${styles.borderAnimation} ${styles.firstBorder}`}></span>
			<span className={`${styles.borderAnimation} ${styles.secondBorder}`}></span>
		</div>
	);

	return <div className={styles.videoContainer}>{currentUI}</div>;
}
