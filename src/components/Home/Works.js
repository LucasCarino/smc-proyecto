import React from "react";

// import test from '../../assets/img/1.png'

import { WorksItems } from './WorksItems';

export default function Works() {

    return (
        <React.Fragment>
            {/* <img src={require("../../assets/img/1.png")} /> */}
            <div className="row bs-gutter-x-1 ">
                {WorksItems.map((item, index) => {
                    return (
                        <div className="w-33 col-md-4" key={index}>
                            <img src={require("../../assets/img/" + item.image)} alt={item.alt}  className="img-works w-100 mb-4"/>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}