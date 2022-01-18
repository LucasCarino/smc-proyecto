import React from "react";

import Works from "./Works";

// import img_test from "../../assets/img/imagen_prueba.png"

import video from "../../assets/img/SMC360-Credenciales.mp4"


export default function Home() {

    return (
        <React.Fragment>
            <hr className="hr" />
            <div>
                {/* <img src={img_test} className="w-100" /> */}
                <video  className="w-100 mb-3"  controls>
                    <source className="w-100" src={video} type="video/mp4" />
                    {/* <source src="movie.ogg" type="video/ogg" /> */}
                    Your browser does not support the video tag.
                </video>
            </div>
            <hr className="hr" />
            <div className="mt-3 d-flex justify-content-between align-items-end">
                <h2 className="text-danger m-0 fw-bold">Trabajos más recientes</h2>
                <ul className="d-flex w-50 list-unstyled justify-content-between m-0">
                    <li>360</li>
                    <li>MEDIOS</li>
                    <li>PLANNING SPONSORSHIP</li>
                    <li>TODOS</li>
                </ul>
            </div>
            <Works />
        </React.Fragment>
    )
}