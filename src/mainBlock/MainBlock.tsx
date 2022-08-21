import React from 'react';
import s from "./Main.module.scss"
import styleContainer from "../common/styles/Contauner.module.css"
import ilya from "../assects/image/ilya.jpg";


export const MainBlock = () => {

    const ilya1 = {
        backgroundImage: 'url(' + ilya + ')',
    };

    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <div>
                        <span>Hi There</span>
                        <h1>I am Ilya Goncharov</h1>
                        <p>Frontend Developer.</p>
                    </div>
                </div>
                <div className={s.photo} style={ilya1}></div>
            </div>
        </div>
    );
};

