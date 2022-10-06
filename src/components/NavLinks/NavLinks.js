import React from 'react';
import styles from './NavLinks.module.css';
import { sidebarData } from '../../data/sidebarData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavLinks(props) {
	const { t } = useTranslation();

	// create nav links from mapping data
	const navElements = sidebarData.map((link, index) => {
		return (
			<Link to={link.path} key={link.id}>
				<li className={styles.navItem} onClick={props.showSidebar}>
					{link.icon}
					<span>{t(`components.navLinks.${index}`)}</span>
				</li>
			</Link>
		);
	});

	return navElements;
}
