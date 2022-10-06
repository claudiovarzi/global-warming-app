import React from 'react';
import styles from './PageContent.module.css';
import InfoButton from '../InfoButton/InfoButton';

export default function PageContent(props) {
	return (
		<div className={styles.pageContent}>
			<p className={styles.description}>{props.description}</p>
			<InfoButton link={props.link} />
		</div>
	);
}
