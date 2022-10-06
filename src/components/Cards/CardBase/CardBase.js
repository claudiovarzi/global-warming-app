import React from 'react';
import styles from './CardBase.module.css';
import PageHeader from '../../PageHeader/PageHeader';
import PageContent from '../../PageContent/PageContent';

const CardBase = (props) => {
	// If card is a flip card applies flipClass
	const flipClass = props.isFlipCard ? `${styles.flipCard}` : '';

	return (
		<div className={`${styles.main} ${styles.dashboardCard} ${flipClass} ${styles.accordionCard}`}>
			{props.showHeader && (
				<PageHeader title={props.title} subtitle={props.subtitle} showHeader={props.showHeader} />
			)}
			{props.children}
			{props.showContent && <PageContent description={props.description} link={props.link} />}
		</div>
	);
};

export default CardBase;
