import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search"
import "./header.css";
import Ctx from "../../Ctx";

export default ({goods, searchGoods, setModalActive}) => {
    const {user, setUser} = useContext(Ctx);
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
     <Link className="logo" to="/">Dog food</Link>
     <Search data={goods} searchGoods={searchGoods}/>
     {/* <input type="search" placeholder="Поиск..." className="search"/> */}
     <nav className="menu">
        {user && <Link to="/profile">{user}</Link>}
        {!user&& <a href="" onClick={logIn}>Войти</a>}
        {user && <a href="" onClick={logOut}>Выйти</a>}
     </nav>
    </header>
        </div>
    </div> 
}