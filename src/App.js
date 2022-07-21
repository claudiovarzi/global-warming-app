import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Temperature from './pages/Temperature/Temperature';
import Co2 from './pages/Co2/Co2';
import Methane from './pages/Methane/Methane';
import No2 from './pages/No2/No2';
import Glaciers from './pages/Glaciers/Glaciers';
import Contribute from './pages/Contribute/Contribute';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<ScrollToTop />
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="temperature" element={<Temperature />} />
					<Route path="co2" element={<Co2 />} />
					<Route path="methane" element={<Methane />} />
					<Route path="no2" element={<No2 />} />
					<Route path="glaciers" element={<Glaciers />} />
					<Route path="contribute" element={<Contribute />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
