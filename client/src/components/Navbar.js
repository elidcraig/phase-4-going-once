import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
	return (
		<div>
			<NavLink to="my-bids">
				<button>My Bids</button>
			</NavLink>
			<NavLink to="new-item">
				<button>New Auction</button>
			</NavLink>
			<NavLink to="search">
				<button>Search</button>
			</NavLink>
			<NavLink to="account">
				<button>Account</button>
			</NavLink>
		</div>
	);
}

export default Navbar;
