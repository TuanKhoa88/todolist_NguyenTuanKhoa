import React from "react";
import { useSelector } from "react-redux";

export default function Report() {

    let report = useSelector((state) => state.report);
    return (
        <div id="report"  className="alert alert-primary" >
            {report}
        </div>
    );
}
