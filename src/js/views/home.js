import React, { useContext, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import { CharacterCard } from "../component/charac-card.js";
import { VehicleCard } from "../component/vehicle-card";
import { PlanetCard } from "../component/planet-card";

export const Home = (props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="main-wrapper mt-5">
			<div id="characters" className="title text-white mt-5">
				<h1 className="title-letters">Characters</h1>
			</div>
			<div className="d-flex h-scrollbar">
			{store.people?.map((people) => (
				<CharacterCard name={people.name} index={people.uid} path="charDetails"/>
			))}
			</div>
			
			<div id="planets" className="title text-white mt-5">
				<h1 className="title-letters">Planets</h1>
			</div>
			<div className="d-flex h-scrollbar">
				{store.planets?.map((planet, i) => (
					<PlanetCard name={planet.name} index={planet.uid}/> 
				))}
			</div>
			<div id="vehicles" className="title text-white mt-5">
				<h1 className="title-letters">Vehicles</h1>
			</div>
			<div className="d-flex h-scrollbar">
				{store.vehicles?.map((vehicle, i) => (
					<VehicleCard name={vehicle.name} index={vehicle.uid}/>
				))}
			</div>
		</div>
	)
};
