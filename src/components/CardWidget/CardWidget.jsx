import { useContext, useState, useEffect } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { SalesContext } from "../../context/SalesContext";
import './CardWidget.css'

// Cant de elementos del carrito
const CardWidget = () => {
	const [items] = useContext(SalesContext);
	const [qty, setTotalQty] = useState(0)

	useEffect(() => {
		const totQty = items.reduce( (acum, el) => acum + el.quantity, 0);
		setTotalQty(totQty);
	}, [items]);

	return (
		<div className="wd">
			<LocalGroceryStoreIcon sx={{ color: "white" }} />
			<p>{qty}</p>
		</div>
	);
};

export default CardWidget;
