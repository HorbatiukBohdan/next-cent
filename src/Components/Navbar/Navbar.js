import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/icons/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
    const menuItems = [
        { text: 'Home', url: '/' },
        { text: 'Service', url: '/service' },
        { text: 'Feature', url: '/feature' },
        { text: 'Product', url: '/product' },
        { text: 'Testimonial', url: '/testimonial' },
        { text: 'FAQ', url: '/faq' }
    ];

    const path = window.location.pathname;

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const navToggler = () => {
        setActive(burgerMenuOpen ? "nav__menu" : "nav__menu nav__active");
        setToggleIcon(burgerMenuOpen ? "nav__toggler" : "nav__toggler toggler");
        setBurgerMenuOpen(!burgerMenuOpen);
    };

    const closeMenu = () => {
        setActive("nav__menu");
        setBurgerMenuOpen(false);
    };

    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="Logo" />
            {burgerMenuOpen && <div className="nav__overlay" onClick={closeMenu}></div>}
            <ul className={active}>
                {menuItems.map((item, index) => (
                    <li key={index} className="nav__item">
                        <Link to={item.url} className="nav__link" onClick={closeMenu}>
                            {item.text}
                        </Link>
                    </li>
                ))}
                <div className='button'>
                    <Link className='btn-login' to={"/login"}><a></a>Login</Link>
                    <Link className='btn-sign-up' to={"/signup"}><a ></a>Sign Up</Link>
                </div>
            </ul>
            <div onClick={navToggler} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
