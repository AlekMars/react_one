import React from "react";
import "./footer.css"

export default () => {
    const year = new Date().getFullYear();
    return <div className="footer__wrapper">
        <div className="container__wrapp">
        <footer className="footer container">
        <span className="footer_copy">©{year}</span>
        <span className="footer_text">Сайт разработан
        с использованием<br/> библиотеки React</span>
        </footer>
    </div>
    </div>
}