import React, { useContext, useEffect, useState } from "react";
import "../../styles/details.css";

import { Context } from "../store/appContext"
import { useParams } from "react-router"

export const CharDetails = () => {

    const params = useParams();
    const { store, actions } = useContext(Context);

    const [param, setParam] = useState();

    useEffect(() => {
        actions.getPeopleDetails(params.id, setParam);
    }, []);

    return (
    <div className="main-wrapper text-center mt-5">
        {param && param.result.properties.name ? (
            <div>
            <div className="pic-description d-flex">
                <img className="image" src={`https://starwars-visualguide.com/assets/img/characters/${param.result.uid}.jpg`} alt="Placeholder Image" />
                <div className="m-5 text-white text-description">
                    <h1 className="description-title fs-2">{param.result.properties.name}</h1>
                    <p className="fs-5 description-paragraph">{param.result.description}</p>
                </div>
            </div>
            <div className="details d-flex text-white justify-content-around mt-4 fs-6">
                <div className="info">
                    <p className="info-title"><strong>Hair Color</strong></p>
                    <p className="info-title">{param.result.properties.hair_color}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Birth Year</strong></p>
                    <p className="info-title">{param.result.properties.birth_year}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Gender</strong></p>
                    <p className="info-title">{param.result.properties.gender}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Height</strong></p>
                    <p className="info-title">{param.result.properties.height}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Skin Color</strong></p>
                    <p className="info-title">{param.result.properties.skin_color}</p>
                </div>
                <div className="info-div info">
                    <p className="info-title"><strong>Eye Color</strong></p>
                    <p className="info-title">{param.result.properties.eye_color}</p>
                </div>
            </div>
        </div>
        ) : ""}
        </div>
    )
};
