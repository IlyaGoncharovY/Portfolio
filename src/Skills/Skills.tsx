import React from 'react';
import s from "./Skils.module.css"
import styleContainer from "../../src/common/styles/Contauner.module.css"
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"React"} description={"React horosho ))"}/>
                    <Skill title={"JS"} description={"JS toje horosho ))"}/>
                    <Skill title={"HTML && CSS"} description={"HTML && CSS toje horosho ))"}/>
                </div>
            </div>
        </div>
    );
};

