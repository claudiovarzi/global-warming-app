import React from 'react';
import styles from './BurgerButton.module.css';
import { FaBars } from 'react-icons/fa';

export default function BurgerButton(props) {
	return (
		<div className={styles.navButton}>
			<FaBars onClick={props.showSidebar} />
		</div>
	);
}
