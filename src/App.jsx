import './App.css';
// Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ContactPage from "./pages/ContactPage/ContactPage";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<NavBar />
				<div>
					<ItemListContainer greeting = "Saludos a nuestros clientes!" />
				</div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/detail/:id" element={<DetailPage />} />
					<Route path="/category/:categoryId" element={<CategoryPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App
