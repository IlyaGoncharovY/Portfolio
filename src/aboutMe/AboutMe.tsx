import React from 'react';
import s from "./AboutMe.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {PersonalInfo} from "./personalinfo/PersonalInfo";
import {TextInfo} from "./textInfo/TextInfo";


export const AboutMe = () => {
    return (
        <div className={s.aboutMe}>
            <div className={`${styleContainer.container} ${s.aboutMeContainer}`}>
                <div className={s.titleContainer}>
                    <Title title={"About Me"} titleBg={"Resume"}/>
                </div>
                <div className={s.aboutMeBox}>
                    <PersonalInfo/>
                    <TextInfo/>
                </div>
            </div>
        </div>
    );
};

