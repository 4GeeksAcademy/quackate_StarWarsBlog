import React from "react";
import "../../styles/home.css";

import { CharacterCard } from "../component/charac-card.js";
import { VehicleCard } from "../component/vehicle-card";
import { PlanetCard } from "../component/planet-card";

export const Home = () => (
	<div className="main-wrapper mt-5">
		<h1 className="title text-white">Characters</h1>
		<div className="d-flex">
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
			<CharacterCard />
		</div>
		<h1 className="title text-white mt-5">Planets</h1>
		<div className="d-flex">
			<PlanetCard />
			<PlanetCard />
			<PlanetCard />
			<PlanetCard />
			<PlanetCard />
		</div>
		<h1 className="title text-white mt-5">Vehicles</h1>
		<div className="d-flex">
			<VehicleCard />
			<VehicleCard />
			<VehicleCard />
			<VehicleCard />
			<VehicleCard />
		</div>
	</div>
);
