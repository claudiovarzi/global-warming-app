import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.errorContainer}>
			<h1 className={styles.errorNumber}>{t('pageNotFound.errorNumber')}</h1>
			<h2 className={styles.errorMessage}>{t('pageNotFound.errorMessage')}</h2>
			<Link to="/" className={styles.backHome}>
				Home
			</Link>
		</div>
	);
};

export default PageNotFound;
