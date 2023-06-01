// import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBAr/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardProduct from './components/CardProduct/CardProduct';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<NavBar />

			<div>
				<ItemListContainer greeting = "Saludos a nuestros clientes!" />
			</div>
			
			<div className="ProductSection">
				<CardProduct
					name="Máquina Tostadora"
					date="A precio del 2022"
					description="Máquina para tostar el pan, eléctrica, de apagado automático"
					img="../src/assets/img/bread-machine.jpg"
				/>
				<CardProduct
					name="Plancha Eléctrica"
					date="A precio del 2022"
					description="Plancha de ropa, con vapor de agua y control de temperatura"
					img="../src/assets/img/electric-iron.jpg"
				/>
				<CardProduct
					name="Máquina de Afeitar"
					date="A precio del 2022"
					description="Máquina de afeitar. Enjuagable. Eléctrica"
					img="../src/assets/img/shaver.jpg"
				/>
        	</div>
		</>
	);
}

export default App
