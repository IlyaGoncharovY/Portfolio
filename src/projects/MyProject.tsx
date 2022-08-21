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
                <Title title={"Projects"}/>
                <div className={s.works}>
                    <Project style={social} title={"social network"} description={"kak vk, tol`ko kruche"}/>
                    <Project style={wider} title={"counter"} description={"super puper counter"}/>
                    <Project title={"todolist"} description={"super puper todolist"} style={social}/>
                    <Project title={"test card"} description={"voobshe pushka"} style={social}/>
                </div>
            </div>
        </div>
    );
};

