import React from "react";
import "../../styles/card.css";

export const VehicleCard = () => {
	return (
		<div>
            <div className="wrapper-card card m-2">
                <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="Placeholder Image"/>
                    <div className="card-body body">
                    <h3 className="text-white">Vehicle Name</h3>
                        <div className="card-description text-white">
                            <p className="card-text m-0">Cargo Capacity: n/a</p>
                            <p className="card-text m-0">Crew: n/a</p>
                            <p className="card-text m-0">Manufacturer: n/a</p>
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
