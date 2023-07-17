/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import PurchaseDetails from "../../components/PurchaseDetails/PurchaseDetails";
// Context
import { SalesContext } from "../../context/SalesContext";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./ShopPage.css";

const initialState = {
	name: "",
	lastname: "",
	phone: "",
	email: "",
	
};

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#FFFFFF',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
});

const ShopPage = () => {
	const outerTheme = useTheme();
	const [values, setValues] = useState(initialState); // Para setear los datos del form
	const [purchaseID, setPurchaseID] = useState(""); // Este estado está destinado a guardar el id de la compra
	const [items, clearCart] = useContext(SalesContext);

	// Obtengo la fecha de hoy
	const todayTime = new Date(Date.now());
	const today = todayTime.getFullYear().toString() + '-' + (todayTime.getMonth() + 1).toString().padStart(2, '0') + '-' + todayTime.getDate().toString();

	// // Convierto el array en un objeto
	// const object = items.reduce((acc, item) => {
	// 	acc[item.id] = item
	// 	return acc
	// }, {})

	// const object = items.reduce((acc, item) => {
	// 	if (item.id) {
	// 		acc[item.id] = item
	// 		return acc
	// 	}
	// }, {})

	// Manejador de los campos del formulario
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	// Envío de datos del formulario
	const onSubmit = async (e) => {
		e.preventDefault();

		// Convierto el array en un objeto
		const object = items.reduce((acc, item) => {
			acc[item.id] = item
			return acc
		}, {})

		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, "purchases"), {values, items: object, date: today});
		// console.log("Document written with ID: ", docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
		clearCart();
	};

	return (
		<>
			{(items && items.length > 0) ? 
				<div className='containerShop'>
					<div className='detailsContainer'>
						<h2>Purchase Details</h2>
						<PurchaseDetails />
					</div>
					<div className="FormContainer">
						<h2>Personal Information</h2>
						<form onSubmit={onSubmit}>
							<TextField 
								color="secondary"
								placeholder="Name"
								style={{ margin: 10, width: 500 }}
								name="name"
								value={values.name}
								onChange={handleOnChange}
								label="Name"
							/>
							<TextField
								color="secondary"
								placeholder="Last Name"
								style={{ margin: 10, width: 500 }}
								name="lastname"
								value={values.lastname}
								onChange={handleOnChange}
								label="Last Name"
							/>
							<TextField
								color="secondary"
								placeholder="Phone"
								style={{ margin: 10, width: 500 }}
								name="phone"
								value={values.phone}
								onChange={handleOnChange}
								label="Phone"
							/>
							<TextField
								color="secondary"
								placeholder="Email"
								style={{ margin: 10, width: 500 }}
								name="email"
								value={values.email}
								onChange={handleOnChange}
								label="Email"
							/>
							<button className="btnASendAction" type="submit">Finalizar Compra</button>
						</form>
						{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
					</div>
				</div>
			: <h3>El Carrito de compras está vacío</h3> }
		</>
	);
};

export default ShopPage;
