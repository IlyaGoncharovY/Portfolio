import React from 'react';
import s from "./Project.module.scss"
import Fade from "react-awesome-reveal";


type WorkType = {
    title: string
    description: string
    style: styleType
    link: string
}

type styleType = {
    backgroundImage:string
}

export const Project = (props: WorkType) => {
    return (
        <Fade>
            <div className={s.project}>
                <div className={s.icon} style={props.style}>
                    <a href={props.link} className={s.buttonProject}>Смотреть</a>
                </div>
                <div className={s.projectInfo}>
                    <h3 className={s.projectTitle}>{props.title}</h3>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
        </Fade>
    );
};

