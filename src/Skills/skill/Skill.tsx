import React from 'react';
import s from "./Skill.module.scss"


type SkillType = {
    title: string
    description:string
    style:styleType
}

type styleType = {
    backgroundImage:string
}

export const Skill = (props:SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

