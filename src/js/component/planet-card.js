import React from "react";
import "../../styles/card.css";

export const PlanetCard = () => {
	return (
		<div>
            <div className="wrapper-card card m-2">
                <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="Placeholder Image"/>
                    <div className="card-body body">
                    <h3 className="text-white">Planet Name</h3>
                        <div className="card-description text-white">
                            <p className="card-text m-0">Population: n/a</p>
                            <p className="card-text m-0">Terrain: n/a</p>
                        </div>
                        <div className="buttons d-flex justify-content-between mt-3">
                            <button type="button" className="btn btn-outline-secondary">Learn More!</button>
                            <button type="button" className="btn btn-outline-light"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
            </div>
        </div>
	);
};
