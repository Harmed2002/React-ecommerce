import './App.css';
// Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar'

// Context
import { SalesProvider } from "./context/SalesContext";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ShopPage from './pages/ShopPage/ShopPage';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<SalesProvider>
			<Router>
				<div className="App">
					<Header />
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/detail/:id" element={<DetailPage />} />
						<Route path="/category/:category" element={<CategoryPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/shop" element={<ShopPage />} />
					</Routes>
				</div>
			</Router>
		</SalesProvider>
	);
}

export default App
