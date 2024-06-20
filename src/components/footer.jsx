import React from "react";
import { SocialIcon } from 'react-social-icons';
import Style from '../css/footer.module.css';

export default function Footer() {
    return (
        <footer className={Style.footerContainer}>
            <div className={Style.contentContainer}>
                <div className={Style.socialIcons}>
                    <a href="https://www.omar-cruz-rmz.com" target="_blank" rel="noreferrer"><img alt="Logo" src="https://raw.githubusercontent.com/Damanger/Portfolio/main/public/Ardilla.webp" width={35} height={'auto'}/></a>
                    <SocialIcon url="https://github.com/Damanger" network="github" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}} />
                    <SocialIcon url='https://wa.me/529514084765/?text=Hola,%20buen%20día,%20quisiera%20contratar%20sus%20servicios%20:).' network="whatsapp" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}} />
                    <SocialIcon url="https://www.linkedin.com/in/omar-cruzr97/" network="linkedin" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}} />
                </div>
                <p>© 2024 Made by: Omar A. Cruz Ramírez. All rights reserved.</p>
            </div>
        </footer>
    );
}