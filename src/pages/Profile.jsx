import React, {useContext} from "react";
import {useNavigate} from "react-router";
import Ctx from "../Ctx";

export default () => {
    const {user, setUser} = useContext(Ctx);
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user1");
        navigate("/");

    }
    return <>
    <h1>Личный кабинет</h1>
    <p>Hello, {user && user.name}</p>
    <a href="" onClick={logOut} style={{color: "orange"}}>Выйти из аккаунта</a>
    </>
}