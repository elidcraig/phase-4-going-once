import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../state/CurrentUserState'
import { currentFullUserState } from '../state/CurrentUserState'
import Avatar from '@mui/material/Avatar'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { FaHome, FaGavel, FaPalette, FaPlus } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'



function Navbar() {
	const navigate = useNavigate()
	
	const currentUserId = useRecoilValue(currentUserState)
	const currentFullUser = useRecoilValue(currentFullUserState)
	const [value, setValue] = React.useState(0);

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
		  value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
          <BottomNavigationAction component={Link} to="/" label="Home" value="Home" icon={<FaHome/>}/>
		  <BottomNavigationAction component={Link} to="/dashboard" label="Dashboard" value="Dashboard" icon={<FaGavel/>}/>
		  <BottomNavigationAction component={Link} to="/explore" label="Explore" value="Explore" icon={<FaPalette/>}/>
		  <BottomNavigationAction component={Link} to="/new-item" label="Create" value="New Auction" icon={<FaPlus/>}/>
		  { currentFullUser ?
		  <BottomNavigationAction component={Link} to="/account" label="Account" value="Account" icon={<Avatar src={currentFullUser.avatar_url} sx={{ width: 30, height: 30 }}/> }/>
		  : 
		  <BottomNavigationAction component={Link} to="/login" label="Login" value="Login" icon={< FiLogIn />}/>
}
        </BottomNavigation>
      </Paper>
	);
}

export default Navbar;
