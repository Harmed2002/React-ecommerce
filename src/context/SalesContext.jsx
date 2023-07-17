/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from "react";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	// Función para agregar item al carrito
	// useEffect(() => {
		const addItemToCart = (newItem) => {

			// Si el objeto tiene items
			if (items.length > 0 && newItem) {
				// Se verifica si el nuevo item ya existe en el carrito
				const itemIndex = items.findIndex(item => item.id == newItem.id);

				// si lo encuentra, incrementa la cantidad seleccionada
				if (itemIndex >= 0) {
					const newProducts = structuredClone(items);
					newProducts[itemIndex].quantity += newItem.quantity;
					setItems(newProducts);
				} else {
					// si no lo encuentra, inserta un nuevo item
					items.push(newItem);
				}
			} else {
				// Si el objeto no tiene ningún item
				items.push(newItem);
			}
		}
	// }, [id]);

	// Función para limpiar el carrito
	const clearCart = () => {
		setItems([]);
	}

	return (
		<SalesContext.Provider value={[items, addItemToCart, clearCart]}>
			{children}
		</SalesContext.Provider>
	);
};