import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Style from '../css/home.module.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const handleScroll = () => {
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
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

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            imgObserver.observe(section);
        });
    }, []);

    return (
        <>
            <Navbar />
            <aside className={Style.aqui}>
            </aside>
            <section data-src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=4608&h=3072&dpr=1">
                <div className={Style.titulo}>
                    <h1>BO·CHA</h1>
                </div>
            </section>
            <section data-src="https://images.pexels.com/photos/7535456/pexels-photo-7535456.jpeg?auto=compress&cs=tinysrgb&w=2266&h=3393&dpr=1">
                <h1 className={Style.titulo}></h1>
            </section>
            <section data-src="https://images.pexels.com/photos/6412836/pexels-photo-6412836.jpeg?auto=compress&cs=tinysrgb&w=3578&h=5367&dpr=1">
                <h1 className={Style.titulo}></h1>
            </section>
        </>
    );
};

export default Home;
