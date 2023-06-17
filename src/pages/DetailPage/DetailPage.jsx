import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../../components/CardProduct/CardProduct';
import axios from "axios";
import './DetailPage.css'

const DetailPage = () => {
	const [prod, setProd] = useState({});
	let { id } = useParams();
	let detail = true;

	useEffect(() => {
		axios(`${import.meta.env.VITE_APP_BASE_URL}/${id}`)
			.then(json => setProd(json.data));
	}, [id]);

	const { title, description, category, image, price } = prod;

	return (
		<div>
			<h1>Detail Page</h1>
			<div className='Card-detail'>
				{/* {prod.id ? <CardProduct prod={prod} /> : null} */}
				{prod.id ? <CardProduct title={title} description={description} category={category} image={image} price={price} detail={detail} /> : null}
			</div>
		</div>
	);
};

export default DetailPage;
