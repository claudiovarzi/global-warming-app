import React from 'react';
import CardBase from '../CardBase/CardBase';
import styles from '../CardBase/CardBase.module.css';

const DashboardCard = ({ title, children, description, link }) => {
	return (
		<CardBase type="dashboardCard">
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.content}>{children}</div>
			{link ? (
				<a className={`${styles.description} ${styles.link}`} href={link} target="blank">
					{description}
				</a>
			) : (
				<p className={styles.notALink}>{description}</p>
			)}
		</CardBase>
	);
};

export default DashboardCard;
