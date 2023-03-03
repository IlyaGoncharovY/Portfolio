import React from 'react';
import s from "./Skills.module.scss"
import styleContainer from "../../src/common/styles/Contauner.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {SkillSetType} from "../common/data/dataSet";

type MySkillsType = {
    skill: SkillSetType[]
}

export const Skills = (props: MySkillsType) => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"} titleBg={"ability"}/>
                <div className={s.skills}>
                    {props.skill.map((el, index) =>
                        <Skill
                            key={index}
                            title={el.title}
                            iconValue={el.iconValue}
                        />)}
                </div>
            </div>
        </div>
    );
};

