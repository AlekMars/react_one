import React from "react";
import "./ads.css";
import pic from "./img/dogs.png";
import eat from "./img/eat.png";


export default () => {

    return <>
    
    <div className="promo">
        <h1 className="promo-text">Корма из натуральных компонентов</h1>
        <p className="promo-content">Особый подход к рациону твоего питомца</p>
    <img src={eat} alt="Корм"/>
    <img src={pic} alt="Собачки"/>
    </div>
    </>
}