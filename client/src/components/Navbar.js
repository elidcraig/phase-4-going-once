import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
	return (
		<div>
			<NavLink to="dashboard">
				<button>Dashboard</button>
			</NavLink>
			<NavLink to="new-item">
				<button>New Auction</button>
			</NavLink>
			<NavLink to="search">
				<button>Explore</button>
			</NavLink>
		</div>
	);
}

export default Navbar;
