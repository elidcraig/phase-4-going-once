import "./App.css";
import React, {useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Header from './Header';
import Navbar from './Navbar'
import Search from "./Search";

function App() {
	return (
		<div className="App">
      <Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/search" element={<Search />} />
			</Routes>
      <Navbar />
		</div>
	);
}

export default App;
