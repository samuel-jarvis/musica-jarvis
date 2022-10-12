import React from 'react';
import './navbar.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Collection, Home, Radio, Profile, Logout  } from '../icons/index';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<img src={Logo} alt="logo" />
			</div>

			<div className="nav__links__group">	
				<ul className="nav__links">
					<li className="nav__link">
						<Link to="/">
							<Home />
						</Link>
					</li>
					<li className="nav__link">
						<Link to="/">
							<Collection />
						</Link>
					</li>
					<li className="nav__link">
						<Link to="/">
							<Radio />
						</Link>
					</li>
				</ul>

				<ul className="nav__links">
					<li className="nav__link">
						<Link to="/login">
							<Profile />
						</Link>
					</li>
					<li className="nav__link">
						<Link to="/register">
							<Logout />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
