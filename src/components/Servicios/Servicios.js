import React from "react";

import { ServiciosItems } from './ServiciosItems';

export default function Servicios() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 mb-5 h1 fw-bold">Servicios</h2>
                <div className="row pb-5 mb-5">
                    {ServiciosItems.map((item, index) => {
                        return (
                            <div className={item.cName} key="1">
                                <div>
                                    <img src={require("../../assets/img/" + item.image)} alt={item.alt} className="mb-4 p-4 w-100 servicios-logo" />
                                </div>
                                <div>
                                    <img src={require("../../assets/img/" + item.icon)} alt={item.alt} className="servicios-icon mb-3"/>
                                </div>
                                <div>
                                    <h3 className="text-danger fw-bold h2">{item.service}</h3>
                                    <p className="mb-3">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}