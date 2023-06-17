import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../../components/CardProduct/CardProduct';
import axios from "axios";
import { Link } from 'react-router-dom';

const CategoryPage = () => {
	let { categoryId } = useParams();
	const [cats, setCats] = useState([]);
	let detail = false;
	
	useEffect(() => {
		axios(`${import.meta.env.VITE_APP_BASE_URL}`)
			.then(json => setCats(json.data));
	}, [categoryId]);

	let filteredProducts = cats.filter((cat) => {
		return cat.category === categoryId;
	});

	// console.log('categoryId', categoryId);
	// console.log('filteredProducts', filteredProducts);

	return (
		<>
			<h1>{categoryId}</h1>
			<div className='Card-list'>
				{filteredProducts.map((prod) => {
					return (
						<div style={{ margin: 5 }} key={prod.id}>
							<Link to={`/detail/${prod.id}`}>
								<CardProduct title={prod.title} description={prod.description} category={prod.category} image={prod.image} price={prod.price} detail={detail} />
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CategoryPage
