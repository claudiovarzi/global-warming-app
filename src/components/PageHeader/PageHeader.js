import React from 'react';
import logo from '../../assets/img/logo.svg';
import styles from './PageHeader.module.css';

export default function PageHeader(props) {
	return (
		<header className={styles.pageHeader}>
			{props.showLogo && <img src={logo} className={styles.logo} alt="logo" />}
			{props.showHeader && <h1 className={styles.title}>{props.title}</h1>}
			{props.children}
			{props.showHeader && <p className={styles.subtitle}>{props.subtitle}</p>}
		</header>
	);
}
