import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './ListProduct.css';
import { Link } from 'react-router-dom';

// Imports de Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ListProduct = () => {
	const [products, setProducts] = useState([]);
	let detail = false;

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, "products"));
			const querySnapshot = await getDocs(q);
			const docs = [];

			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });	// Unimos en un solo array la data y el id que vienen separados de Firestore
			});
			setProducts(docs);	// Pasamos a Products todo lo que trae docs de Firestore
		};
		getProducts();
	}, []);

	return (
		<div className='Card-list'>
			{products.map((prod) => {
				return (
					<div style={{ margin: 5 }} key={prod.id}>
						<Link to={`/detail/${prod.id}`}>
							{/* <CardProduct prod={ prod } /> */}
							<CardProduct id={prod.id} title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price} stock={prod.stock} detail={detail} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ListProduct;
