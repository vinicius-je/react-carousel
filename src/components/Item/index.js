import React from "react";
import "./style.css"

const Item = ({imgPath}) => {
    return(
        <div className="item-container">
            <img src={imgPath}/>
        </div>
    )
}

export default Item;