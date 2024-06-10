import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

    return (
        <nav className={Style.navbar}>
            <Link to="/" activeclassname="activo">
                <img src="./bocha.webp" alt="BO·CHA" className={Style.imgLogo} />
            </Link>
            <div className={Style.navLinks}>
                <Link to="/" activeclassname="activo" className={Style.navLink} style={location.pathname === "/" ? activeStyle : {}} onClick={closeMenu}>Inicio</Link>
                <Link to="/menu" activeclassname="activo" className={Style.navLink} style={location.pathname === "/menu" ? activeStyle : {}} onClick={closeMenu}>Menú</Link>
                <Link to="/ubicacion" activeclassname="activo" className={Style.navLink} style={location.pathname === "/ubicacion" ? activeStyle : {}} onClick={closeMenu}>Ubicación</Link>
            </div>
        </nav>
    )
}

export default navbar
