import React from 'react';
import s from "./WorkOption.module.css"
import styleContainer from "../common/styles/Contauner.module.css";
import {SButton} from "./Button/SButton";


export const WorkOption = () => {
    return (
        <div className={s.workOption}>
            <div className={`${styleContainer.container} ${s.workOptionContainer}`}>
               <h2 className={s.title}>Рассматриваю варианты удалённой работы</h2>
                <SButton title={"Нанять меня"}/>
            </div>
        </div>
    );
};

