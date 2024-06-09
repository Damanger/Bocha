import React from 'react'
import Style from '../css/navbar.module.css'

const navbar = () => {
    return (
        <nav className={Style.navbar}>
            <img src="./bocha.webp" alt="BO·CHA" className={Style.imgLogo} />
        </nav>
    )
}

export default navbar
