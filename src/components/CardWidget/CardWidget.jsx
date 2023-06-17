import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import './CardWidget.css'

// Cant de elementos del carrito
const CardWidget = () => {
	return (
		<div className="wd">
			<LocalGroceryStoreIcon sx={{ color: "white" }} />
			<p>3</p>
		</div>
	);
};

export default CardWidget;
