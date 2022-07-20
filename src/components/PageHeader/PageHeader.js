import React from 'react';
import styles from './PageHeader.module.css';

export default function PageHeader(props) {
	return (
		<header className={styles.pageHeader}>
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.subtitle}>{props.subtitle}</p>
		</header>
	);
}
