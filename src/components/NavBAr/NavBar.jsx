import { useState, useEffect } from 'react';
import axios from "axios";
import CardWidget from "../CardWidget/CardWidget";
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		axios(`${import.meta.env.VITE_APP_BASE_URL}/categories`)
			.then(json => setCats(json.data));
	}, []);

	//console.log('cats', cats);
	
	return (
		<nav className="NavBar">
			<ul>
				<Link to="/">Home</Link>
				<li className="dropdown-li">Categorías
					<ul className="dropdown">
						{cats.map((element, index) => {
							return (
							<Link key={index} to={`/category/${element}`}>
								{element}<br/>
							</Link>
							);
						})}

					</ul>
				</li>
				<Link to="/contact">Contact</Link>
				<Link><CardWidget /></Link>
			</ul>
		</nav>
	);
};

export default NavBar
