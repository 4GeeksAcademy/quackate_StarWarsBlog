import React, { useContext, useState } from "react";
import "../../styles/card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);

    // const [active, setActive] = useState(false);

    return (
        <div className="mx-3">
            <div className="wrapper-card card m-2">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index}.jpg`} className="card-img-top" alt="Placeholder Image" />
                <div className="body card-body">
                    <h3 className="text-white mb-4 fs-4">{props.name}</h3>
                    <div className="buttons d-flex justify-content-between mt-3">
                        <Link to={"charDetails/" + props.index}>
                            <button type="button" className="btn btn-outline-secondary">Learn More!</button>
                        </Link>
                        <button onClick={() => actions.addFavorite(props.name)} type="button" className="btn heart-button btn-outline-light"><i className="far fa-heart"></i></button>
                    </div>
                </div> 
            </div>
        </div>
    );
};
