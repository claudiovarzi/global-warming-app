import React from 'react';
import styles from './ApiError.module.css';

export default function ApiError(props) {
	// type of error message
	const message =
		props.errorType === 404
			? `Sorry, can't find data :(`
			: `Sorry, can't load data. Please try again`;

	return <h3 className={styles.error}>{message}</h3>;
}
