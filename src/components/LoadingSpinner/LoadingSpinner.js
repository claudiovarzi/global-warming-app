import ClipLoader from 'react-spinners/ClipLoader';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
	return (
		<div className={styles.spinnerContainer}>
			<ClipLoader color={'#8675ff'} size={50} />
		</div>
	);
}

export default LoadingSpinner;
