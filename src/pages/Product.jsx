import React, {useState, useEffect, useContext} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import "./style.css";
import {Trash3, Truck, Trophy, Tags} from "react-bootstrap-icons";
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // const [flag, changeFlag] = useState(!!users.length)
     const {api, PATH, user, setGoods} = useContext(Ctx);
     const navigate = useNavigate();
    
     useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);
            // fetch(`https://api.react-learning.ru/v2/group-8/users`,{
            //     headers: {
            //         authorization: `Bearer ${token}`
            //       }

            // }).then(res => res.json()).then(data =>{ 
                
            //     setUsers(data);
            //     console.log(data);
            // })

   // })
    const btnSt = {
        position: "absolute",
        right: "20px",
        top: "120px",
        cursor: "pointer",
        height: "auto"

    }
    const remove = () => {
        api.delProduct(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setGoods(prev => prev.filter(g => g._id !== data._id))
                    navigate(`${PATH}catalog`);
                }
            })
    }
    console.log(product);
 return <>
 
{product && product.author && product.author._id === user._id && <button 
onClick={remove} 
className="btn" 
style={btnSt}><Trash3/>
</button>}
<Link to={PATH +"catalog"} className="btn">Назад</Link>
 <h1>{product.name || "Страница товара"}</h1>
 <div className="priceWrapper">
    <p>Артикул: {id}</p>
    <h2 className="priceDemo"><Tags/> {product.price} ₽</h2>

    </div>
 <div className="productWrapper">
 <img src={product.pictures} alt= {product.name} style= {{width: "400px"}}/>
 <div className="blockWrapper">
 <div className="oneBlock">
    <Truck className="truckIcons"/>
    <h5><b>Доставка по всему миру!</b></h5>
    <p>Доставка курьером - <b> от 399 р</b></p>
    <p>Доставка в пункт выдачи - <b>от 199 р</b></p>
 </div>
 <div className="twoBlock">
    <Trophy className="trophyIcons"/>
    <h5><b>Гарантия качества!</b></h5>
    <p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, что бы удовлетворить ваши нужны.</p>
 </div>
 </div>
 </div>
<h2>Описание</h2>
<p>{product.description}</p>
<h2>Характеристики</h2>
<p>Вес: {product.wight} г</p>
<p>Цена: {product.price} ₽</p>








 <h2>Отзывы</h2>
 <div className="reviews">
    {product.reviews && product.reviews.length > 0 &&
    product.reviews.map((el, i) => <Review {...el} key={i}/>)}
    
 </div>
 
 </>
 
}