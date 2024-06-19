import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Style from '../css/error404.module.css';

const error404 = () => {
    return (
        <>
            <Navbar />
            <h1>Error 404: Page Not Found</h1>
            <Footer />
        </>
    )
}

export default error404
