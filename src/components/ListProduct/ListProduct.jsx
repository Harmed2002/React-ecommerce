import { useState, useEffect } from 'react';
import axios from "axios";
import CardProduct from '../CardProduct/CardProduct';
import './ListProduct.css';
import { Link } from 'react-router-dom';

const ListProduct = () => {
	const [products, setProducts] = useState([]);
	let detail = false;

	useEffect(() => {
		axios(`${import.meta.env.VITE_APP_BASE_URL}`)
			.then(json => setProducts(json.data));
	}, []);

	//console.log('products', products);

	return (
		<div className='Card-list'>
			{products.map((prod) => {
				return (
					<div style={{ margin: 5 }} key={prod.id}>
						<Link to={`/detail/${prod.id}`}>
							{/* <CardProduct prod={ prod } /> */}
							<CardProduct title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price} detail={detail} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ListProduct;
