import React from 'react';
import styles from './InfoButton.module.css';
import { useTranslation } from 'react-i18next';

const InfoButton = ({ link }) => {
	const { t } = useTranslation();

	return (
		<a className={styles.link} href={link} target="blank">
			{t('components.infoButton')}
		</a>
	);
};

export default InfoButton;
