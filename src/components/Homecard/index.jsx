import React, {useContext, useState,useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";





export default ({name, pictures, price, likes, _id, discount}) => {
    const {user, setFavorites, api, setGoods, setBasket, setVisibleGoods} = useContext(Ctx);
    
    const [like, setLike] = useState(likes && likes.includes(user._id));
    const [flag, setFlag] = useState(false);

    const update  = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setFlag(true);
      setLike(!like);
      api.setLike(_id, like)
      .then(res => res.json())
      .then(data => {
        setFavorites(prev => {
            let arr = prev.filter(el => el._id === _id);
          return arr.length > 0 ?
           prev.filter(el => el._id !== _id) : 
           [...prev, data]
    
          })  
          setGoods(prev => prev.map(el => {
           if (el._id === data._id) {
            return data;
           } else {
            return el;
           }
          }));
          setVisibleGoods(prev => prev.map(el => {
            if (el._id === data._id) {
             return data;
            } else {
             return el;
            }
           }))      
      })    
    }
    const buy = (e) => {
e.preventDefault();
e.stopPropagation();
setBasket(prev => {
  const test = prev.filter(el => el.id === _id)
  if (test.length) {
  return prev.map(el => { 
    if (el.id === _id) {
      el.cnt++;
    } 
    return el;
  }) 
}
  else {
    return [...prev, {id: _id, cnt: 1}]
  }
})
    }
    
   
    return <div className="card">
        <img src={pictures} alt= {name} style= {{width: "100px"}}/>
        
        {name}
        <h6>Скидка {discount} %</h6>
        <h6>{price}р</h6>
        {/* <button className="btn" onClick={buy}>Купить</button> */}
        
    </div>
}