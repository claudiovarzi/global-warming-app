import React from 'react';
import styles from './NavLinks.module.css';
import { sidebarData } from '../../data/sidebarData';
import { Link } from 'react-router-dom';

export default function NavLinks(props) {
	// create nav links from mapping data
	const navElements = sidebarData.map((link) => {
		return (
			<Link to={link.path} key={link.id}>
				<li className={styles.navItem} onClick={props.showSidebar}>
					{link.icon}
					<span>{link.title}</span>
				</li>
			</Link>
		);
	});

	return navElements;
}
