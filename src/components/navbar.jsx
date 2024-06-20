import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Style from '../css/navbar.module.css'

const navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeStyle, setActiveStyle] = useState({});

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveStyle({ borderBottom: "0.2rem solid rgb(172, 182, 249)", paddingBottom: "0.25rem"});
        } else if (location.pathname === "/menu") {
            setActiveStyle({ borderBottom: "0.2rem solid rgb(172, 182, 249)", paddingBottom: "0.25rem" });
        } else if (location.pathname === "/ubicacion") {
            setActiveStyle({ borderBottom: "0.2rem solid rgb(172, 182, 249)", paddingBottom: "0.25rem" });
        } else {
            setActiveStyle({});
        }
    }, [location]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={Style.navbar}>
            <Link to="/" activeclassname="activo" aria-label="Logo">
                <img src="./bocha.webp" alt="BO·CHA" width="48" height="48" className={Style.imgLogo} onClick={closeMenu}/>
            </Link>
            <div className={Style.hamburgerMenu} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
            <div className={`${Style.navLinks} ${isMenuOpen ? Style.showMenu : ''}`}>
                <Link to="/" activeclassname="activo" aria-label="Inicio" className={Style.navLink} style={location.pathname === "/" ? activeStyle : {}} onClick={closeMenu}><FontAwesomeIcon icon={faHome} className={Style.homeIcon} /></Link>
                <Link to="/menu" activeclassname="activo" aria-label="Menú" className={Style.navLink} style={location.pathname === "/menu" ? activeStyle : {}} onClick={closeMenu}>Menú</Link>
                <Link to="/ubicacion" activeclassname="activo" aria-label="Ubicación" className={Style.navLink} style={location.pathname === "/ubicacion" ? activeStyle : {}} onClick={closeMenu}>Ubicación</Link>
            </div>
        </nav>
    )
}

export default navbar
