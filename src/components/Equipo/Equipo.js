import React from "react";

import { EquipoItems } from "./EquipoItems";

export default function Equipo() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 pb-3 fw-bold h1">Equipo</h2>
                <div className="row bs-gutter-x-1 pb-5 mb-5">
                    {EquipoItems.map((item, index) => {
                        return (
                            <div className={item.cName}>
                                <img src={require("../../assets/img/" + item.image)} alt={item.alt} className="img-nosotros w-100 mb-4" />
                                <h4 className="text-danger fw-bold">{item.name}</h4>
                                <h5 className="fw-bold mb-3">{item.position}</h5>
                                {item.team.map((name) => (
                                    <p className="mb-0">{name}</p>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}