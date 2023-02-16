import React from "react";
import "./footer.css"
import dog from "./img/dog.svg"
import {Telegram, Instagram, Whatsapp} from "react-bootstrap-icons";

export default () => {
    const year = new Date().getFullYear();
    return <div className="footer__wrapper">
        <div className="container__wrapper">
        <footer className="footer container">
        <span className="footer_copy"><img src={dog} alt="dog"></img> Dogfood</span>
        
        <div className="footer_text">
          <h3>Мы на связи!</h3>
          <p>8 (999) 00-00-00</p>
          <div className="iconsWrapper">
            <Telegram className="iconsSize"/>
            <Instagram className="iconsSize"/>
            <Whatsapp className="iconsSize"/>
          </div>

        </div>
        </footer>
    </div>
    </div>
}