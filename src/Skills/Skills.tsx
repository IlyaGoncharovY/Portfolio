import React from 'react';
import s from "./Skills.module.scss"
import styleContainer from "../../src/common/styles/Contauner.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"} titleBg={"Tech"}/>
                <div className={s.skills}>
                    <Skill title={"React"} iconValue={"vscode-icons:file-type-reactts"}/>
                    <Skill title={"Redux"} iconValue={"logos:redux"}/>
                    <Skill title={"Type-script"} iconValue={"vscode-icons:file-type-typescript-official"}/>
                    <Skill title={"Java-Script"} iconValue={"vscode-icons:file-type-js-official"}/>
                    <Skill title={"HTML"} iconValue={"vscode-icons:file-type-html"}/>
                    <Skill title={"CSS"} iconValue={"logos:css-3"}/>
                    <Skill title={"Rest-API"} iconValue={"dashicons:rest-api"}/>
                    <Skill title={"Git-hub"} iconValue={"logos:git-icon"}/>
                    <Skill title={"SASS"} iconValue={"vscode-icons:file-type-sass"}/>
                    <Skill title={"Material-Ui"} iconValue={"logos:material-ui"}/>
                    <Skill title={"Icon-ify"} iconValue={"simple-icons:iconify"}/>
                </div>
            </div>
        </div>
    );
};

