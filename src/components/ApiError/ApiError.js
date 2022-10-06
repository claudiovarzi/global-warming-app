import React from 'react';
import styles from './ApiError.module.css';
import { useTranslation } from 'react-i18next';

export default function ApiError({ error }) {
	const { t } = useTranslation();
	// type of error message
	const message =
		error.response.status === 404
			? t('components.apiError.error.404')
			: t('components.apiError.error.other');

	console.log(error);

	return <h3 className={styles.error}>{message}</h3>;
}
