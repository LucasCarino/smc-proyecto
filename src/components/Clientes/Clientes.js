import React from "react";

import clientes from "../../assets/img/clientes.jpg"

export default function Servicios() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 mb-3 fw-bold h1">Nuestros Clientes</h2>
                <img src={clientes} alt="nuestros clientes" className="img-fluid mb-5 mt-5"/>
            </div>
        </React.Fragment>
    )
}