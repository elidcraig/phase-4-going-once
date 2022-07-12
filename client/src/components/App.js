import "./App.css";
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from './Home'
import Header from './Header';
import Navbar from './Navbar'
import Search from "./Search";
import Account from "./Account";
import UserBids from "./UserBids";
import NewItemForm from './NewItemForm'
import Login from './Login';

function App() {
	return (
		<div className="App">
	    <Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="my-bids" element={<UserBids />} />
				<Route exact path="new-item" element={<NewItemForm />} />
				<Route exact path="search" element={<Search />} />
				<Route exact path="account" element={<Account />} />
				<Route exact path="login" element={<Login />}/>
			</Routes>
      <Navbar />
		</div>
	);
}

export default App;
