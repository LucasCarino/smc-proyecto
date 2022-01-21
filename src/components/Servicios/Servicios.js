import React from "react";

import { ServiciosItems } from './ServiciosItems';

export default function Servicios() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 fw-bold">Servicios</h2>
                {/* <div className="d-flex flex-wrap justify-content-between"> */}
                <div className="row">

                    {ServiciosItems.map((item, index) => {
                        return (
                            <div className={item.cName}>
                                <div>
                                    <img src={require("../../assets/img/" + item.image)} alt={item.alt} className="img-fluid mb-4 p-3 w-100" />
                                </div>
                                <div>
                                    <img src={require("../../assets/img/" + item.icon)} alt={item.alt} />
                                </div>
                                <div>
                                    <h3 className="text-danger fw-bold">{item.service}</h3>
                                    <p className="mb-3">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* </div> */}
        </React.Fragment>
    )
}