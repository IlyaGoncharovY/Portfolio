import React from 'react';
import s from "./MyProject.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {Project} from "./project/Project";
import socialImage from "../assects/image/social1.png"
import cardImg from "../assects/image/cardImg.png"
import todoImg from "../assects/image/todoImg.png"
import chat from "../assects/image/chat.png"

export const MyProjects = () => {

    const social = {
        backgroundImage: 'url(' + socialImage + ')',
    };

    const cardImage = {
        backgroundImage: 'url(' + cardImg + ')',
    };

    const todolistImg = {
        backgroundImage: 'url(' + todoImg + ')'
    }

    const chatImg = {
        backgroundImage: `url(` + chat + `)`
    }

    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Title title={"Projects"} titleBg={"Works"}/>
                <div className={s.works}>
                    <Project url={`https://ilyagoncharovy.github.io/todolist-ts/`}
                             style={todolistImg} title={"todolist"}
                             description={"ability to create and edit tasks"}/>
                    <Project url={`https://ilyagoncharovy.github.io/fridays-project/`}
                             style={cardImage} title={"Learn card"}
                             description={"working with maps for training, in any field"}/>
                    <Project url={"https://ilyagoncharovy.github.io/SocialNetworkHomeWork/"}
                             style={social} title={"social network"}
                             description={"social network, training project"}/>
                    <Project url={"https://github.com/IlyaGoncharovY/my-chat"}
                             style={chatImg} title={"chat"}
                             description={"chat on websockets"}/>
                </div>
            </div>
        </div>
    );
};

