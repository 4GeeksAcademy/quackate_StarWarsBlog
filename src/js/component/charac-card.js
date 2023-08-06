import React from "react";
import "../../styles/card.css";
import { Link } from "react-router-dom";

export const CharacterCard = () => {
    return (
        <div>
            <div className="wrapper-card card m-2">
                <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="Placeholder Image" />
                <div className="body card-body">
                    <h3 className="text-white">Character Name</h3>
                    <div className="card-description text-white">
                        <p className="card-text m-0">Gender: n/a</p>
                        <p className="card-text m-0">Hair Color: n/a</p>
                        <p className="card-text m-0">Eye Color: n/a</p>
                    </div>
                    <div className="buttons d-flex justify-content-between mt-3">
                    <Link to="details">
                        <button type="button" className="btn btn-outline-secondary">Learn More!</button>
                    </Link>
                        <button type="button" className="btn btn-outline-light"><i className="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
