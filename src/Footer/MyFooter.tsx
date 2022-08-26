import React from 'react';
import s from "./MyFooter.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import telegram from "../assects/image/telegram.png"
import github from "../assects/image/github.png"
import linkedin from "../assects/image/linkedin.png"
import vkontakte from "../assects/image/1625751621_58-kartinkin-com-p-piksel-art-cherno-belii-art-krasivo-65.png"


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
                    <div className={s.box} style={telegram1}>

                    </div>
                    <div className={s.box} style={github1}>

                    </div>
                    <div className={s.box} style={linkedin1}>

                    </div>
                </div>
            </div>
        </div>
    );
};

