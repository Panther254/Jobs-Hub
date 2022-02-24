import React from 'react'
import '../styles/NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
	return (
		<div className="NavBar">
			<div className="navbar__hamburgerIcon">
				<MenuIcon />
			</div>
			<div className="navbar__logo">
			
			</div>
			<div className="navbar__auth">
				<h5>Sign In</h5>
			</div>
			<div className="navbar__profile">
				<h5>Profile</h5>
			</div>
		</div>
	)
}

export default NavBar