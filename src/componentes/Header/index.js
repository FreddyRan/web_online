import React from 'react'
import Logo1 from "./Logo1.png";
export const Header = () => {
    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <a href="#">
                <div className="logo">
                    <img scr={Logo1} alt="logo"width="50"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>

                <li>
                    <a href="#">PRODUCTOS</a>
                </li>

                <li>
                    <a href="#">VISITANOS</a>
                </li>
                <li>
                    <a href="#">REGISTRATE</a>
                </li>
                <li>
                    <a href="#">AYUDA</a>
                </li>
            </ul>
            <div className="carrito">
                <box-icon name="carrito"></box-icon>
                <p>Tus Compras</p>
                <span className="item__total"></span>
            </div>
        </header>

        
    )
}