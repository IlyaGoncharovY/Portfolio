import React from 'react';
import s from "./MyProject.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {Project} from "./project/Project";
import socialImage from "../assects/image/social1.png"
import weiderImage from "../assects/image/mini-dart-vader.png"

export const MyProjects = () => {

    const social = {
        backgroundImage: 'url(' + socialImage + ')',
    };
//2:00
    const wider = {
        backgroundImage: 'url(' + weiderImage + ')',
    };

    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Title title={"Projects"} titleBg={"Works"}/>
                <div className={s.works}>
                    <Project link={"https://ilyagoncharovy.github.io/fridays-project/"} title={"todolist"} description={"ability to create and edit tasks"} style={social}/>
                    <Project link={""} style={wider} title={"Learn card"} description={"working with maps for training, in any field"}/>
                    <Project link={""} style={social} title={"social network"} description={"social network, training project"}/>
                </div>
            </div>
        </div>
    );
};

