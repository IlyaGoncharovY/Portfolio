import React from 'react';
import s from "./Project.module.scss"


type WorkType = {
    title: string
    description: string
    style:styleType
}

type styleType = {
    backgroundImage:string
}

export const Project = (props: WorkType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={props.style}>
               <a href={""} className={s.buttonProject}>Смотреть</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

