import React from 'react';
import s from "./Skill.module.scss"
import {Icon} from "@iconify/react";
import Fade from "react-awesome-reveal";


type SkillType = {
    title: string
    iconValue: string
}

export const Skill = (props: SkillType) => {
    return (
        <Fade>
            <div className={s.skill}>
                <Icon className={s.icon} icon={props.iconValue}/>
                <h3 className={s.title}>{props.title}</h3>
            </div>
        </Fade>
    );
};

