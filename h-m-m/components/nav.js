import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

	

	return (
		<div className="navigation">
			<NavLink to="/">Login</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;