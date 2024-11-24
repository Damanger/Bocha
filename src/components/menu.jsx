import React, { useState } from 'react';
import Navbar from './navbar';
import Style from '../css/menu.module.css';

const Menu = () => {
    const [itemIndex, setItemIndex] = useState(4)
    const [animationClass, setAnimationClass] = useState('fadeInUp');
    const rotationValues = [-80, -60, -40, -20, 0, 20, 40, 60, 80];
    const images = [
        "latte.webp", "latte.webp", "latte.webp", "latte.webp",
        "latte.webp", "latte.webp", "latte.webp", "latte.webp", "latte.webp"
    ];
    const descriptions = [
        "Choco Bocha - Nuestra tapioca + Choco Oaxaqueño Frappé + Milk foam",
        "Baby Taro - Nuestra tapioca + Taro Root Frappé + Milk foam",
        "Mix Berries - Nuestra tapioca + Yogurt Frappé + Frambuesa + Zarzamora + Fresa",
        "Fresa Yogurt - Nuestra tapioca + Yogurt Frappé + Fresas Oaxaqueñas",
        "Bocha Berries - Nuestra tapioca + Yogurt Frappé + Fresa & Zarzamora",
        "Mango Maracuyá - Nuestra tapioca + Té Verde + Mango + Maracuyá",
        "Bocha Latte - Nuestra tapioca + Leche (tu eliges cual) + Café Oaxaqueño + Milk foam",
        "Fresa Fresh - Nuestra tapioca + Té Verde + Pulpa de fresas",
        "Snow Coco - Nuestra tapioca + Coquito Frappé + Coco tostado + Milk foam"
    ];
    const [rotation, setRotation] = useState(rotationValues[itemIndex]); 

    const handleMenuClick = (index) => {
        const newRotation = rotationValues[index];

        // Rotar ligeramente antes de ajustar
        setRotation((prevRotation) =>
            index > itemIndex ? prevRotation - 10 : prevRotation + 10
        );

        // Ajustar a la rotación final
        setTimeout(() => {
            setRotation(newRotation);
        }, 300);

        setItemIndex(index);

        const animations = ['fadeInUp', 'fadeInLeft', 'fadeInZoom', 'fadeInRight', 'fadeInDown'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        setAnimationClass(randomAnimation);
    };

    return (
        <>
            <Navbar />
            <section
                className={Style.fondoMenu}
                data-src="https://images.pexels.com/photos/4041246/pexels-photo-4041246.jpeg?auto=compress&cs=tinysrgb&w=6305&h=4203&dpr=2"
            >
                <div className={Style.circularSlider}>
                    <div className={Style.container}>
                        <div className={`${Style.text} ${Style[animationClass]}`} key={itemIndex}>
                            <h1>{descriptions[itemIndex].split(" - ")[0]}</h1>
                            <p>{descriptions[itemIndex].split(" - ")[1]}</p>
                        </div>
                        <div className={Style.slider}>
                            <div
                                className={Style.indicator}
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                                }}
                            ></div>
                                <div className={Style.menu}>
                                    {descriptions.map((desc, index) => (
                                        <div key={index}>
                                            <span
                                                onClick={() => handleMenuClick(index)}
                                                style={{
                                                    cursor: "pointer",
                                                    fontWeight:
                                                        index === itemIndex ? "bold" : "normal",
                                                }}
                                            >
                                                {desc.split(" ")[0]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            <div
                                className={Style.imagen}
                                style={{
                                    backgroundImage: `url(${images[itemIndex]})`,
                                    transition: "background-image 0.5s",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
