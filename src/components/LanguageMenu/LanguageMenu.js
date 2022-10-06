import React from 'react';
import styles from './LanguageMenu.module.css';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const languages = [
	{
		code: 'en',
		name: 'English',
		country_code: 'gb',
	},
	{
		code: 'it',
		name: 'Italiano',
		country_code: 'it',
	},
];

export default function LanguageMenu(props) {
	const visibility = props.collapse ? styles.hideMenu : styles.LanguageMenu;

	const { i18n } = useTranslation();

	const menuItems = languages.map(({ code, name, country_code }) => {
		return (
			<li className={styles.languages} key={country_code}>
				<ReactCountryFlag countryCode={country_code} svg />
				<button className={styles.button} onClick={() => i18n.changeLanguage(code)}>
					{name}
				</button>
			</li>
		);
	});

	return (
		<div className={visibility}>
			<ul className={styles.menuItems}>{menuItems}</ul>
		</div>
	);
}
