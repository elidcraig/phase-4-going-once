import "./App.css";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Header from './Header';
import Navbar from './Navbar'
import Explore from "./Explore";
import Account from "./Account";
import Dashboard from "./Dashboard";
import NewItemForm from './NewItemForm'
import Login from './Login';

function App() {
	return (
		<div className="App">
	    <Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="dashboard" element={<Dashboard />} />
				<Route exact path="new-item" element={<NewItemForm />} />
				<Route exact path="explore" element={<Explore />} />
				<Route exact path="account" element={<Account />} />
				<Route exact path="login" element={<Login />}/>
			</Routes>
      <Navbar />
		</div>
	);
}

export default App;
