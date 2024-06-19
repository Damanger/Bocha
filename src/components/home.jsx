import React, { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Style from '../css/home.module.css';

const home = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const preloadImage = (img) => {
            const src = img.getAttribute('data-src');
            if (!src) {
                return;
            }
            img.style.backgroundImage = `url(${src})`;
        };

        const imgOptions = {
            threshold: 0,
            rootMargin: '0px 0px 300px 0px'
        };

        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    preloadImage(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            });
        }, imgOptions);

        sections.forEach(section => {
            imgObserver.observe(section);
        });
    }, []);

    return (
        <>
            <Navbar />
            <section data-src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=4608&h=3072&dpr=1">
                <h1 className={Style.titulo}>BO·CHA</h1>
            </section>
            <section data-src="https://images.pexels.com/photos/7535456/pexels-photo-7535456.jpeg?auto=compress&cs=tinysrgb&w=2266&h=3393&dpr=1">
                <h1 className={Style.titulo}></h1>
            </section>
            <section data-src="https://images.pexels.com/photos/6412836/pexels-photo-6412836.jpeg?auto=compress&cs=tinysrgb&w=3578&h=5367&dpr=1">
                <h1 className={Style.titulo}></h1>
            </section>
            <Footer />
        </>
    );
};

export default home;
