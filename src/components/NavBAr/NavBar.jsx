import React from 'react'
import CardWidget from "../CardWidget/CardWidget";
import './NavBar.css'

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li><a href="https://www.google.com" target="_blank" rel="noreferrer">Inicio</a></li>
				<li><a href="https://www.google.com" target="_blank" rel="noreferrer">About</a></li>
				<li><a href="https://www.google.com" target="_blank" rel="noreferrer">Contact</a></li>
				<li><CardWidget /></li>
			</ul>
		</nav>
	);
};

export default NavBar
