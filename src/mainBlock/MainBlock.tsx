import React from 'react';
import s from "./Main.module.css"
import styleContainer from "../common/styles/Contauner.module.css"


export const MainBlock = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Ilya Goncharov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

