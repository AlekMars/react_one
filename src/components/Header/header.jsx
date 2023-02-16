import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search"
import "./header.css";
import Ctx from "../../Ctx";
import {PlusCircle, HeartFill, CartDash} from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";
import logo from "./img/logo.svg";
import Basket from "../../pages/Basket";

export default () => {
    const {user, setUser, setModalActive, PATH, favorites, basket} = useContext(Ctx);
    // const [user, setUser] = useState(localStorage.getItem("user1"));

    // let user = localStorage.getItem("user1");
    const logIn = (e) => {
        e.preventDefault();
        // let name = prompt("Как вас зовут?");
        // if (name) {
        //     localStorage.setItem("user1", name);
        //     setUser(name);
            
        // }
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user1");
        setUser("")
        
    }
    return <div className="header__wrapper">
        <div className="container__wrapper">
        <header className="header container">
     <Link className="logo" to={PATH}><img src={logo} alt="logo"></img></Link>
     <Search/>
     {/* <input type="search" placeholder="Поиск..." className="search"/> */}
     <nav className="menu">
        {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "20px"}}/></Link>}
        {user && <Link to={PATH + "favorites"} className="badge-link">
            <HeartFill style={{fontSize: "20px"}}/>
            <Badge bg="danger" text="light">{favorites.length}</Badge>
            </Link>}
            {user && <Link to= {PATH + "basket"} className="badge-link">
                <CartDash style={{fontSize: "20px"}}/>
                <Badge bg="danger" text="light">
                    {basket.reduce((acc, el) => acc + el.cnt, 0)}
                    </Badge>
                </Link>}
            
            
        {user && user.name && <Link to={PATH + "profile"}>{user.name}</Link>}
        {!user&& <a href="" onClick={logIn}>Войти</a>}
        
     </nav>
    </header>
        </div>
    </div> 
}