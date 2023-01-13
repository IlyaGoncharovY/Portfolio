import s from "./social.module.scss";
import React from 'react';
import telegram from "../../assects/image/telegram111.png";
import github from "../../assects/image/github.png";
import linkedin from "../../assects/image/linkedin1.png";



export const Social = () => {

    const telegram1 = {
        backgroundImage: 'url(' + telegram + ')',
    }
    const github1 = {
        backgroundImage: 'url(' + github + ')',
    }
    const linkedin1 = {
        backgroundImage: 'url(' + linkedin + ')',
    }

    return (
        <div className={s.boxContainer}>
            <a href={"https://t.me/ilyaGoncharov93"}>
                <div className={s.box} style={telegram1}>
                </div>
            </a>
            <a href={"https://github.com/IlyaGoncharovY"}>
                <div className={s.box} style={github1}>
                </div>
            </a>
            <a href={"https://www.linkedin.com/in/ilyagoncharovy/"}>
                <div className={s.box} style={linkedin1}>
                </div>
            </a>
        </div>
    );
};

