import React from 'react';
import s from "./Skills.module.scss"
import styleContainer from "../../src/common/styles/Contauner.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import react1 from "../assects/image/react.png";
import js from "../assects/image/js.png";
import htmlcss from "../assects/image/htmlcss.png";



export const Skills = () => {

    const react = {
        backgroundImage: 'url(' + react1 + ')'
    }
    const js1 = {
        backgroundImage: 'url(' + js + ')'
    }
    const htmlcss1 = {
        backgroundImage: 'url(' + htmlcss + ')'
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill style={react} title={"React"} description={"React horosho ))"}/>
                    <Skill style={js1} title={"JS"} description={"JS toje horosho ))"}/>
                    <Skill style={htmlcss1} title={"HTML && CSS"} description={"HTML && CSS toje horosho ))"}/>
                </div>
            </div>
        </div>
    );
};

