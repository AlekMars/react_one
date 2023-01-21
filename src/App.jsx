import React, {useState, useEffect} from "react";
import {Routes, Route, Router} from "react-router-dom"
import "./style.css"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import products from "./assets/data.json";
import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
//import Search from "./components/Search/search";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
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

   useEffect(() => {
      console.log("hello")
      console.log(token);
      if(token) {
         // загрузить данные с сервера.
         api.getProducts()
      .then(res => res.json())
       .then(data => {
         setGoods(data.products);
       })
      }
      
   }, [])
   useEffect(() => {
      
      console.log("Change token");
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
         setGoods(data.products);
       })
      }
   }, [api])
   useEffect(() => {
      setVisibleGoods(goods);
   }, [goods])

    return ( 
    <Ctx.Provider value={{
      user: user,
      token: token,
      api: api,
      modalActive: modalActive,
      goods: goods,
      visibleGoods: visibleGoods,

      setUser: setUser,
      setToken: setToken,
      setApi: setApi,
      setModalActive: setModalActive,
      setGoods: setGoods,
      setVisibleGoods: setVisibleGoods,
      PATH: PATH

    }}>
    <Header  />
        <div className="container">
           
           <main>
            {/* {user ? <Catalog data = {goods}/> : <Home data= {smiles}/>} */}
           <Routes>
            <Route path ={PATH} element={<Home data={smiles}/>}/>
            <Route path={PATH + "catalog"} element={
               <Catalog data={smiles}/>}/>
               <Route path={PATH + "profile"} element={<Profile />}/>
            <Route path={PATH + "catalog/:id"} element={<Product/>}/>

           </Routes>
            </main>
        
    </div>
    <Footer/>
    <Modal/>
    </Ctx.Provider>
    )
}

export default App;