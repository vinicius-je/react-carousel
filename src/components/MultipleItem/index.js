import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

const MultipleItem = ({children}) => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(4);
    const [slides] = useState(children.length);

    const breakpoint1 = useMediaQuery('(max-width: 1200px)');
    const breakpoint2 = useMediaQuery('(max-width: 900px)');
    const breakpoint3 = useMediaQuery('(max-width: 580px)');

    const checkMediaQuery = () => {
        if(breakpoint1) setShow(3);
        else setShow(4);
        if(breakpoint2) setShow(2);
        if(breakpoint3) setShow(1);
    }

    useEffect(() => {
        checkMediaQuery();
    }, [breakpoint1, breakpoint2, breakpoint3])

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