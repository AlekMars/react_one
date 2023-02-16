import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import food from "./assets/data.json";
import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
//import Search from "./components/Search/search";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Addform from "./pages/Addform";
import Favorites from "./pages/Favorites";
import Fake from "./pages/Fake";
import Basket from "./pages/Basket";




import Ctx from "./Ctx";

import { Api } from "./Api";




const PATH = "/";
//const PATH = "/react_one/";


const smiles = ["^_^","o_O","=)",";)",";(","^_O"];


const App = () => {
   let usr = localStorage.getItem("user1");
   if (usr) {
      usr = JSON.parse(usr);
   }
   const [user, setUser] = useState(usr);
   const [token, setToken] = useState(localStorage.getItem("token8"));
   const [modalActive, setModalActive] = useState(false);
   const [api, setApi] = useState(new Api(token));
   const [goods, setGoods] = useState([]);
   const [visibleGoods, setVisibleGoods] = useState(goods);
   const [favorites, setFavorites] = useState([]);
   const [basket, setBasket] = useState(localStorage.getItem
      ("basket")? JSON.parse(localStorage.getItem("basket8")): [])

  
   useEffect(() => {
      
      
      setApi(new Api(token));
      let usr = localStorage.getItem("user1");
      if (usr) {
         usr = JSON.parse(usr);
      }
      setUser(usr);
   }, [token])

   useEffect(() => {
      if(!user) {
         localStorage.removeItem("token8");
         setToken(null);
      }

   }, [user])

   useEffect(() => {
      if(token) {
         // загузить данные с сервера
         api.getProducts()
      .then(res => res.json())
       .then(data => {
         setVisibleGoods(data.products);
         setGoods(data.products);
       })
      }
   }, [api])
   
   useEffect(() => {
      

      setFavorites(goods.filter(el => {
       return el.likes &&  el.likes.includes(user._id);
      }))
   }, [goods])

   useEffect(() => {
      
         localStorage.setItem("basket8", JSON.stringify(basket));
      
   }, [basket]);

    return ( 
    <Ctx.Provider value={{
      user: user,
      token: token,
      api: api,
      modalActive: modalActive,
      goods: goods,
      visibleGoods: visibleGoods,
      favorites: favorites,

      setUser: setUser,
      setToken: setToken,
      setApi: setApi,
      setModalActive: setModalActive,
      setGoods: setGoods,
      setVisibleGoods: setVisibleGoods,
      setFavorites: setFavorites,
      PATH: PATH,
      basket,
      setBasket

    }}>
    <Header  />
        <div className="wrapper">

           
           <main className="py-5">
            {/* {user ? <Catalog data = {goods}/> : <Home data= {smiles}/>} */}
           <Routes>
            <Route path ={PATH} element={<Home data={food}/>}/>
            <Route path={PATH + "catalog"} element={<Catalog data={food}/>}/>
               <Route path={PATH + "profile"} element={<Profile />}/>
            <Route path={PATH + "catalog/:id"} element={<Product/>}/>
            <Route path={PATH + "add"} element= {<Addform/>}/>
            <Route path={PATH + "favorites"} element = {<Favorites/>}/>
            <Route path={PATH + "basket"} element = {<Basket/>}/>
            <Route path={PATH + "fake/:n/:title"} element= {<Fake/>}/>
            
           </Routes>
           {/* <ul>
             {smiles.map((el,i) => <li key={el}>
               <Link to={`${PATH}fake/${i+1}/${el}`}>{el}</Link>
               </li>)}
           </ul>
            */}
            </main>
   
            
    </div>
    <Footer/>
    <Modal/>
    </Ctx.Provider>
    )
}

export default App;