import React from "react";
import './style.css'

const Bar = ({currentIndex}) => {
    return(
        <div className={currentIndex ? "current-index bar": "bar"}></div>
    )
}

export default Bar;