import React from "react";
import "./index.css"




export default ({text, like}) => {
    console.log(like)
    return <div className="card">
        {text}
        <span className="card_heart">
            {
                like
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
            
        </span>
    </div>
}