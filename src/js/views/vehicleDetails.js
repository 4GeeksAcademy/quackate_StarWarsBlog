import React, { useContext, useEffect, useState } from "react";
import "../../styles/details.css";

import { Context } from "../store/appContext"
import { useParams } from "react-router"

export const VehicleDetails = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    const [vehicle, setVehicle] = useState();

    useEffect(() => {
        actions.getVehicleDetails(params.id, setVehicle);
    }, []);

    return (
    <div className="main-wrapper text-center mt-5">
        {vehicle && vehicle.result.properties.name ? (
            <div>
            <div className="pic-description d-flex">
                <img className="vehicle-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`} alt="Placeholder Image" />
                <div className="m-5 text-white text-description">
                    <h1 className="description-title fs-2">{vehicle.result.properties.name}</h1>
                    <p className="fs-5 description-paragraph">{vehicle.result.description}</p>
                </div>
            </div>
            <div className="details d-flex text-white justify-content-around mt-4 fs-6">
                <div className="info">
                    <p className="info-title"><strong>Model</strong></p>
                    <p className="info-title">{vehicle.result.properties.model}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Vehicle Class</strong></p>
                    <p className="info-title">{vehicle.result.properties.vehicle_class}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Manufacturer</strong></p>
                    <p className="info-title">{vehicle.result.properties.manufacturer}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Length</strong></p>
                    <p className="info-title">{vehicle.result.properties.length}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Crew</strong></p>
                    <p className="info-title">{vehicle.result.properties.crew}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Cargo Capacity</strong></p>
                    <p className="info-title">{vehicle.result.properties.cargo_capacity}</p>
                </div>
            </div>
        </div>
        ) : ""}
        </div>
    )
};
