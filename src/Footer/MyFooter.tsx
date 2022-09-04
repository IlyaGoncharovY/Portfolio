import React from 'react';
import s from "./MyFooter.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import telegram from "../assects/image/telegram111.png"
import github from "../assects/image/github.png"
import linkedin from "../assects/image/linkedin1.png"


export const MyFooter = () => {

    const telegram1 = {
        backgroundImage: 'url(' + telegram + ')',
    }
    const github1 = {
        backgroundImage: 'url(' + github + ')',
    }
    const linkedin1 = {
        backgroundImage: 'url(' + linkedin + ')',
    }
    const vk = {
        backgroundImage: 'url(' + telegram1 + ')',
    }
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title title={"Ilya Goncharov"}/>
                <div className={s.boxContainer}>
                    <a href={"https://t.me/ilyaGoncharov93"}>
                        <div className={s.box} style={telegram1}>
                        </div>
                    </a>
                    <a href={"https://github.com/IlyaGoncharovY"}>
                        <div className={s.box} style={github1}>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/feed/"}>
                        <div className={s.box} style={linkedin1}>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

