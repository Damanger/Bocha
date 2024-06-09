import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../css/navbar.module.css'

const navbar = () => {
    return (
        <nav className={Style.navbar}>
            <img src="./bocha.webp" alt="BO·CHA" className={Style.imgLogo} />
            <div className={Style.navLinks}>
                <Link to="/" className={Style.navLink}>Inicio</Link>
                <Link to="/menu" className={Style.navLink}>Menú</Link>
                <Link to="/ubicacion" className={Style.navLink}>Ubicación</Link>
            </div>
        </nav>
    )
}

export default navbar
