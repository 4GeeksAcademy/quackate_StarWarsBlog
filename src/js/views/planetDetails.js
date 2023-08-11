import React, { useContext, useEffect, useState } from "react";
import "../../styles/details.css";

import { Context } from "../store/appContext"
import { useParams } from "react-router"

export const PlanetDetails = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    const [planet, setPlanet] = useState();

    useEffect(() => {
        actions.getPlanetsDetails(params.id, setPlanet);
    }, []);

    return (
    <div className="main-wrapper text-center mt-5">
        {planet && planet.result.properties.name ? (
            <div>
            <div className="pic-description d-flex">
                <img className="planet-image" src={planet.result.uid == 1 ? "https://s-media-cache-ak0.pinimg.com/originals/63/10/83/631083a55deb7a03daf66ccbd9235f4b.jpg" : `https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`} alt="Placeholder Image" />
                <div className="m-5 text-white text-description">
                    <h1 className="description-title fs-2">{planet.result.properties.name}</h1>
                    <p className="fs-5 description-paragraph">{planet.result.description}</p>
                </div>
            </div>
            <div className="details d-flex text-white justify-content-around mt-4 fs-6">
                <div className="info">
                    <p className="info-title"><strong>Diameter</strong></p>
                    <p className="info-title">{planet.result.properties.diameter}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Rotation Period</strong></p>
                    <p className="info-title">{planet.result.properties.rotation_period}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Orbital Period</strong></p>
                    <p className="info-title">{planet.result.properties.orbital_period}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Population</strong></p>
                    <p className="info-title">{planet.result.properties.population}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Climate</strong></p>
                    <p className="info-title">{planet.result.properties.climate}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Terrain</strong></p>
                    <p className="info-title">{planet.result.properties.terrain}</p>
                </div>
            </div>
        </div>
        ) : ""}
        </div>
    )
};
