import React from 'react';
import styles from './Sidebar.module.css';
import BurgerButton from '../BurgerButton/BurgerButton';
import { CgClose } from 'react-icons/cg';
import NavLinks from '../NavLinks/NavLinks';
import Footer from '../Footer/Footer';
import onClickOutside from 'react-onclickoutside';

function Sidebar() {
	// sidebar visibility state
	const [sidebar, setSidebar] = React.useState(false);

	// sidebar visibility class based on state
	const visibility = sidebar ? styles.active : styles.navMenu;

	// sidebar visibility toggle
	function showSidebar() {
		setSidebar((sidebar) => !sidebar);
	}

	// hide sidebar on outside click
	Sidebar.handleClickOutside = () => {
		setSidebar(false);
	};

	return (
		<div className={styles.navbar}>
			<BurgerButton showSidebar={showSidebar} />
			<nav className={visibility}>
				<ul className={styles.navMenuItems}>
					<li className={styles.navClose} onClick={showSidebar}>
						<CgClose />
					</li>
					<div className={styles.navLinks}>
						<NavLinks showSidebar={showSidebar} />
					</div>
				</ul>
				<Footer />
			</nav>
		</div>
	);
}

// config for onClickOutside package
const clickOutsideConfig = {
	handleClickOutside: () => Sidebar.handleClickOutside,
};

export default onClickOutside(Sidebar, clickOutsideConfig);
