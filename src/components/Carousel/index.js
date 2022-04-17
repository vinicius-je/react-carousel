import React, { useEffect, useState } from "react";
import Bar from "../Bar";
import './style.css'

const Carousel = ({children}) => {
    const [index, setIndex] = useState(0);
    // amount of carousel items
    const [items, setItems] = useState(children.length);

    useEffect(() => {
        setItems(children.length);
    }, [children])

    const nextSlide = () => {
        if(index < (items - 1)){
            setIndex(state => state + 1);
        }
    }

    const prevSlide = () => {
        if(index > 0){
            setIndex(state => state - 1);
        }
    }

    return(
        <div className="carousel-container">
            <button className="left-btn" onClick={prevSlide}>&lt;</button>
            <div className="carousel-content-wrapper">
                <div className="carousel-content"
                    style={{transform: `translateX(-${index * 100}%)`}}>
                    {children}
                </div>
            </div>
            <div className="bar-container">
                {Array.from({length: items}, ((_, i) => {
                   return <Bar key={i} index={index} currentIndex={index === i ? true : false}/>
                }))}
            </div>
            <button className="right-btn" onClick={nextSlide}>&gt;</button>
        </div>
    )
}

export default Carousel;