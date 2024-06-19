import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Style from '../css/menu.module.css';

const menu = () => {
    return (
        <>
            <Navbar/>
            <section className={Style.fondoMenu} data-src="https://images.pexels.com/photos/4041246/pexels-photo-4041246.jpeg?auto=compress&cs=tinysrgb&w=6305&h=4203&dpr=2">
            
            </section>
            <Footer/>
        </>
    )
}

export default menu
