import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from './Home'
import Header from './Header';
import Navbar from './Navbar'
import Search from "./Search";
import Account from "./Account";
import UserBids from "./UserBids";
import "./App.css";

function App() {
	return (
		<div className="App">
      <RecoilRoot>
	  <Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="my-bids" element={<UserBids />} />
				<Route exact path="new-item" element={<Search />} />
				<Route exact path="search" element={<Search />} />
				<Route exact path="account" element={<Account />} />
			</Routes>
      <Navbar />
	  </RecoilRoot>
		</div>
	);
}

export default App;
