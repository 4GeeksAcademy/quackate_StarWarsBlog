import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div>
			<nav className="blog-navbar navbar navbar-expand-lg justify-content-between">
				<Link to="/">
					<img className="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				</Link>
				<div className="dropdown favs-button">
					<button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="far fa-star"></i>&nbsp;Favorites&nbsp;</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Something</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</nav>
			<nav className="navbar navbar-expand-lg sub-nav navbar-dark">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" aria-current="page" href="#">CHARACTERS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#">PLANETS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#">VEHICLES</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="search-bar d-flex fs-5">
				<input type="text" className="form-control input fs-4 text-white" placeholder="Search Databank"/>
				<button className="search-button d-flex" type="button"><i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH</button>
			</div>

		</div>
	);
};
