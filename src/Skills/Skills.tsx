import React from 'react';
import s from "./Skills.module.css"
import styleContainer from "../../src/common/styles/Contauner.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"React"} description={"React horosho ))"}/>
                    <Skill title={"JS"} description={"JS toje horosho ))"}/>
                    <Skill title={"HTML && CSS"} description={"HTML && CSS toje horosho ))"}/>
                </div>
            </div>
        </div>
    );
};

