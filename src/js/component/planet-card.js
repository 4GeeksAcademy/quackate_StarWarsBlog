import React, { useContext } from "react";
import "../../styles/card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="mx-3">
            <div className="wrapper-card card m-2">
                <img src={props.index == 1 ? "https://s-media-cache-ak0.pinimg.com/originals/63/10/83/631083a55deb7a03daf66ccbd9235f4b.jpg" : `https://starwars-visualguide.com/assets/img/planets/${props.index}.jpg`} className="planet-img card-img-top" alt="Placeholder Image" />
                <div className="card-body body">
                    <h3 className="text-white mb-4 fs-4">{props.name}</h3>
                    <div className="buttons justify-content-between d-flex mt-3">
                    <Link to={"planetDetails/" + props.index}>
                        <button type="button" className="btn btn-outline-secondary">Learn More!</button>
                    </Link>
                        <button onClick={() => {!store.favorites.includes(props.name)? actions.addFavorite(props.name) : ""}} type="button" className={`btn heart-button ${store.favorites.includes(props.name)? "btn-light" : "btn-outline-light"}`}><i className="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
