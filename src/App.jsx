import React, {useState} from "react";
import "./style.css"
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import products from "./assets/data.json";
import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
//import Search from "./components/Search/search";
import Modal from "./components/Modal";

const smiles = ["^_^","o_O","=)",";)",";(","^_O"];


const App = () => {
   const [user, setUser] = useState(localStorage.getItem("user1"));
   const [modalActive, setModalActive] = useState(false);
    return ( 
    <>
    <Header 
           user = {user} 
           setUser = {setUser} 
           products={products}
           setModalActive ={setModalActive}
           />
        <div className="container">
           
           <main>
            {user ? <Catalog data = {products}/> : <Home data= {smiles}/>}
            </main>
        
    </div>
    <Footer/>
    <Modal isActive ={modalActive} setState = {setModalActive}/>
    </>
    )
}

export default App;