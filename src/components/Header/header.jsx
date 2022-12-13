import React, {useState} from "react";
import Search from "../Search/search"
import "./header.css"

export default ({user, setUser, products, setModalActive}) => {
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
        <header className="header container">
     <a className="logo" href="">Dog food</a>
     <Search data={products}/>
     {/* <input type="search" placeholder="Поиск..." className="search"/> */}
     <nav className="menu">
        {user && <a href="">{user}</a>}
        {!user&& <a href="" onClick={logIn}>Войти</a>}
        {user && <a href="" onClick={logOut}>Выйти</a>}
     </nav>
    </header>
    </div> 
}