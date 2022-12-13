import React from "react";
import Card from "../components/Card";
import "./style.css";


export default ({data}) => {
    return <>
    <div className="homeCard">
     Баннер
    </div>
   <div className="cards">
                
              {/* {data.map((el, i) => <Card key={"card_" + i} text={el} like={(i+1) % 2 === 0}/>)} */}
            </div>
    </>
}