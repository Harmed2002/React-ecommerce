import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './CardProduct.css'

const CardProduct = ({ img, name, description, date }) => {
	return (
		<Card sx={{ maxWidth: 345, backgroundColor:'black' }}>
			<CardActionArea>
				<CardMedia component="img" image={img} alt="logo-product" />
				<CardContent>
					<Typography gutterBottom variant="h4" component="div" color="white">
						{name}
					</Typography>
					<Typography variant="body2" color="white">
						{description}
					</Typography>
					<Typography variant="caption" color="white">
						{date}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardProduct;
