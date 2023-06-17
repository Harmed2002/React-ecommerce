/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


//const CardProduct = ({ prod }) => {
const CardProduct = ( props ) => {
	// Desestructurando:
	const { title, description, category, image, price, detail} = props;

	return (
		<Card sx={{ maxWidth: 250, backgroundColor:'red' }}>
			<CardActionArea>
				<CardMedia 
					component="img" 
					height="200" 
					image={image} 
					alt="logo-product" 
				/>
				<CardContent>
					<Typography gutterBottom variant="h8" component="div" color="white">{title}</Typography>
					{detail ? <Typography variant="body2" color="white">{description}</Typography> : null}
					<Typography variant="body2" color="white">${price}</Typography>
					<Typography variant="caption" color="white">{category}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardProduct;
