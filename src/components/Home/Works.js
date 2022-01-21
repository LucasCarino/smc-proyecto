import React from "react";

// import test from '../../assets/img/1.png'

import { WorksItems } from './WorksItems';

export default function Works() {

    return (
        <React.Fragment>
            {/* <img src={require("../../assets/img/1.png")} /> */}
            <div className="d-flex flex-wrap justify-content-between">
                {WorksItems.map((item, index) => {
                    return (
                        <div className="w-33">
                            <img src={require("../../assets/img/" + item.image)} alt={item.alt}  className="img-works w-100 mb-4"/>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}