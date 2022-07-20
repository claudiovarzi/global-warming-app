import React from 'react';
import styles from './PageContent.module.css';

export default function PageContent(props) {
	return (
		<div className={styles.pageContent}>
			<p className={styles.description}>{props.description}</p>
			<a className={styles.link} href={props.link} target="blank">
				more info
			</a>
		</div>
	);
}
