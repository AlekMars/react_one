import React from "react";
import Card from "../components/Card";
import "./style.css";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";


export default ({data}) => {
    return <>
    <Link to="/catalog">Перейти в каталог</Link>
    <Ads/>
    {/* <div className="homeCard">
     Баннер
    </div> */}
   <div className="cards">
                
              {/* {data.map((el, i) => <Card key={"card_" + i} text={el} like={(i+1) % 2 === 0}/>)} */}
            </div>
    </>
}