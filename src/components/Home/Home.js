import React from "react";

import Works from "./Works";

import img_test from "../../assets/img/index_bg.png"

import video from "../../assets/img/SMC360-Credenciales.mp4"


export default function Home() {

    return (
        <React.Fragment>
            <div className="container">

                <hr className="hr" />
                <div>
                    {/* <img src={img_test} className="w-100" /> */}
                    <video className="w-100 mb-3" poster={img_test} muted autoPlay>
                        <source className="w-100" src={video} type="video/mp4" />
                    </video>
                </div>
                <hr className="hr" />
                <div className="mt-4 d-flex justify-content-between align-items-end mb-4">
                    <h2 className="text-danger m-0 fw-bold">Trabajos más recientes</h2>
                    <ul className="d-flex list-unstyled m-0">
                        <li className="mx-2">360</li>
                        <li className="mx-2">MEDIOS</li>
                        <li className="mx-2">PLANNING SPONSORSHIP</li>
                        <li className="mx-2 me-0">TODOS</li>
                    </ul>
                </div>
                <Works />
            </div>
        </React.Fragment>
    )
}