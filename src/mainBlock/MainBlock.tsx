import React from 'react';
import s from "./Main.module.scss"
import styleContainer from "../common/styles/Contauner.module.css"
import ilya from "../assects/image/ilya.jpg";
import Tilt from 'react-parallax-tilt';

export const MainBlock = () => {

    const ilya1 = {
        backgroundImage: 'url(' + ilya + ')',
    };

    return (
        <div className={s.mainBlock}>
            <div className={s.colorBlock}/>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <Tilt>
                    <div className={s.photo} style={ilya1}/>
                </Tilt>
                <div className={s.text}>
                    <div className={s.textEl}>
                        <h1>- I am Ilya Goncharov.</h1>
                        <h1 className={s.mainTitle}>Frontend Developer.</h1>
                        <p className={s.aboutText}>   Hello friend!
                            I am a novice front‑end developer specializing
                            in creating a user interface.
                            I am passionate about creating great software
                            that improves the lives of the people around me. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

