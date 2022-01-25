import React from "react";
import Works from "../Home/Works";

export default function Portfolio() {
    return (
        <React.Fragment>
            <div className="container">
                <hr className="hr mb-3" />
                <h2 className="text-danger m-0 mb-3 fw-bold h1">Portfolio</h2>
                <Works />
            </div>
        </React.Fragment>
    )
}