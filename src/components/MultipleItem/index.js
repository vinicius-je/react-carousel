import React, { useState } from "react";
import "./style.css";

const MultipleItem = ({children}) => {
    // console.log(show);
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(4);
    const [slides] = useState(children.length);

    const nextSlide = () => {
        if(index < (slides - show)){
            setIndex(state => state + 1);
        }
    }

    const prevSlide = () => {
        if(index > 0){
            setIndex(state => state - 1);
        }
    }

    return(
        <div className="multiple-item-container">
            <button className="left-btn" onClick={prevSlide}>&lt;</button>
            <div className="multiple-item-content-wrapper">
                <div className={`multiple-item-content show-${show}`}
                    style={{transform: `translateX(-${index * (100 / show)}%)`}}>
                    {children}
                </div>
            </div>
            <button className="right-btn" onClick={nextSlide}>&gt;</button>
        </div>
    )
}

export default MultipleItem;