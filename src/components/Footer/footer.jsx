import React from "react";
import "./footer.css"

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <span className="footer_copy">©{year}</span>
        <span className="footer_text">Сайт разработан
        с использованием<br/> библиотеки React</span>
        </footer>
}