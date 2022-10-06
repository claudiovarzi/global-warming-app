import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<p className={styles.credits}>
				{t('components.footer')}
				<strong>
					<a className={styles.contact} href="mailto:varziclaudio@gmail.com">
						Claudio Varzi
					</a>
				</strong>
			</p>
			<p className={styles.copyright}>Copyright © 2022</p>
		</footer>
	);
}
