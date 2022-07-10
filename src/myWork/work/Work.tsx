import React from 'react';
import s from "./Work.module.css"
import {SButton} from "../../workOption/Button/SButton";


type WorkType = {
    title: string
    description: string
}

export const Work = (props: WorkType) => {
    return (
        <div className={s.work}>
            <div className={s.icon}>
                <SButton title={"Посмотреть"}/>
            </div>
            <h3>{props.title}</h3>
           <span className={s.description}>{props.description}</span>
        </div>
    );
};

