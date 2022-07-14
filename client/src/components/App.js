import "./App.css";
import { useEffect, useState, React } from "react";
import { Routes, Route } from "react-router-dom";
import {
	currentUserState,
	currentFullUserState,
} from "../state/CurrentUserState";
import { useRecoilState, useRecoilValue } from "recoil";
import Home from "./Home";
import Header from "./Header";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Account from "./Account";
import Dashboard from "./Dashboard";
import NewItemForm from "./NewItemForm";
import Details from "./Details";
import Login from "./Login";
import EditItemForm from "./EditItemForm";

function App() {
	const [fullUser, setFullUser] = useRecoilState(currentFullUserState);
	const [currentUserId, setCurrentUserId] = useRecoilState(currentUserState);

	useEffect(() => {
		fetch("/me").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setFullUser(user);
					setCurrentUserId(user.id);
				});
			}
		});
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="dashboard" element={<Dashboard />} />
				<Route exact path="new-item" element={<NewItemForm />} />
				<Route path="edit-item/:itemId" element={<EditItemForm />} />
				<Route exact path="explore" element={<Explore />} />
				<Route exact path="details" element={<Details />} />
				<Route exact path="account" element={<Account />} />
				<Route exact path="login" element={<Login />} />
			</Routes>
			<Navbar />
		</div>
	);
}

export default App;
