import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	/***/
	const [inputText, setInputText] = useState("");
	const [showAutocomplete, setShowAutocomplete] = useState(false);
	const [autocompleteResults, setAutocompleteResults] = useState([]);

	let inputHandler = (text) => {
		setInputText(text)

		if (text.trim() == "") {
			setAutocompleteResults([])
			setShowAutocomplete(false);
		}

		else {
			const fetchChar = fetch("https://www.swapi.tech/api/people?");
			const fetchPlanets = fetch("https://www.swapi.tech/api/planets?")
			const fetchVehicle = fetch("https://www.swapi.tech/api/vehicles?")

			Promise.all([fetchChar, fetchPlanets, fetchVehicle])
				.then((responses) =>
					Promise.all(responses.map((response) => response.json()))
				)
				.then(([charData, planetData, vehicleData]) => {
					const combinedData = [
						...charData.results.filter((result) =>
							result.name.toLowerCase().includes(text.toLowerCase())
						),
						...planetData.results.filter((result) =>
							result.name.toLowerCase().includes(text.toLowerCase())
						),
						...vehicleData.results.filter((result) =>
							result.name.toLowerCase().includes(text.toLowerCase())
						)]
					setAutocompleteResults(combinedData)
					console.log(combinedData)
					setShowAutocomplete(true);
				})
				.catch((error) => {
					console.log("Looks like there was a problem: \n", error);
				});
		}
	};

	const selectedItemType = (item) => {
		if (item.url && item.url.toLowerCase().includes("people")) {
			return "charDetails"
		}
		else if (item.url && item.url.toLowerCase().includes("planets")) {
			return "planetDetails"
		}
		else return "vehicleDetails"
	};

	const handleSelectAutocomplete = (item) => {
		setInputText(item.name);
		setShowAutocomplete(false);
		console.log(`${selectedItemType(item)}/${item.uid}`)
		navigate(`${selectedItemType(item)}/${item.uid}`);
	};
	/***/


	return (
		<div>
			<nav className="blog-navbar navbar navbar-expand-lg justify-content-between">
				<Link to="/">
					<img className="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				</Link>
				<div className="dropdown favs-button">
					<button className="inner-favs-button btn text-white dropdown-toggle d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="far fa-star"></i>&nbsp;Favorites&nbsp;&nbsp;<p className=" favs-counter m-0"><strong>{store.favorites.length}</strong></p></button>

					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{(store.favorites && store.favorites.length > 0) ?
							store.favorites.map((item, index) => (
								<Link to={item && item.path ? ("/" + item.path + "/" + item.index) : ""}>
									<li key={item}>
										<a className="dropdown-item d-flex justify-content-between">{item}<i onClick={() => actions.deleteFavorite(index)} className="trash fas fa-trash-alt mt-1 ms-3"></i></a>
									</li>
								</Link>
							))
							: <li className="text-center">Add Favorites Here!</li>}
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
								<a className="nav-link" aria-current="page" href="#characters">CHARACTERS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#planets">PLANETS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#vehicles">VEHICLES</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="search-bar d-flex fs-5">
				<input type="search" onChange={(e) => inputHandler(e.target.value)} value={inputText} className="form-control input fs-4 text-white" placeholder="Search Databank" />
				<button className="search-button d-flex" type="button"><i className="fas fa-search"></i> &nbsp;&nbsp;SEARCH</button>
			</div>
			<div className="searchbar-results-wrapper">
				{showAutocomplete && autocompleteResults.length > 0 && (
					<ul className="searchbar-list p-0 scrollbar">
						{autocompleteResults.map((item, index) => (
							<li key={index} className="my-2" onClick={() => handleSelectAutocomplete(item)} >
								{item.name}
							</li>
						))}
					</ul>
				)}
			</div>

		</div>
	);
};

/*<Link to={store.people.includes(item) ? `/charDetails/${index}` : store.planets.includes(item) ? `/planetDetails/${index}` : `/vehicleDetails/${index}`}>
</Link>*/

/* I changed props on charCard, changed the links on navbar, and the add favorites too, missing to do the rest of the fetches and add dropdowns */

//{item && item.name ? item.name : ""}
//{item && item.path ? ("/" + item.path + "/" + item.index) : ""}