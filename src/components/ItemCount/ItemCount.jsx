/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './ItemCount.css';

const ItemCount = () => {
	return (
		<div className='itemCount'>
			<label htmlFor="cant">Cantidad</label>
			<div className='itemControls'>
				<button>-</button>
				<input type="text" id="cant" name="cant" disabled></input>
				<button>+</button>
			</div>
			<button>Agregar al Carrito</button>
		</div>
	)
}

export default ItemCount