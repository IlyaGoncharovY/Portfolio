import React from 'react';
import s from "./MyProject.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {Project} from "./project/Project";
import {ProjectsType} from "../common/data/dataSet";

type MyProjectsType = {
    project: ProjectsType[]
}

export const MyProjects = (props: MyProjectsType) => {

    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Title title={"Projects"} titleBg={"Works"}/>
                <div className={s.works}>
                    {props.project.map(el =>
                        <Project url={el.url}
                                 style={el.style}
                                 title={el.title}
                                 description={el.description}
                        />)}
                </div>
            </div>
        </div>
    );
};

