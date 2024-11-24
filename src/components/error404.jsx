import React from 'react'
import Navbar from './navbar';
import Style from '../css/error404.module.css';

const error404 = () => {
    return (
        <>
            <Navbar />
            <h1>Error 404: Page Not Found</h1>
        </>
    )
}

export default error404
