import React from "react";

import clientes from "../../assets/img/clientes.png"

export default function Servicios() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 mb-1 fw-bold">Nuestros Clientes</h2>
                <img src={clientes} alt="nuestros clientes" className="img-fluid"/>
            </div>
        </React.Fragment>
    )
}