import React from "react";

import { EquipoItems } from "./EquipoItems";

export default function Equipo() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 fw-bold">Equipo</h2>
                <div className="d-flex flex-wrap justify-content-between">
                    {EquipoItems.map((item, index) => {
                        return (
                            <div className={item.cName}>
                                <img src={require("../../assets/img/" + item.image)} alt={item.alt} className="img-fluid img-nosotros h-50 w-100 mb-4" />
                                <h3 className="text-danger fw-bold">{item.name}</h3>
                                <h3 className="fw-bold mb-3">{item.position}</h3>
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