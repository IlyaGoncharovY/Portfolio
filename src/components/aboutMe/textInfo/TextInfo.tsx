import React from 'react';
import s from "./TextInfo.module.scss"
import {Education} from "./Education/Education";


type TextInfoType = {
    title: string
}

export const TextInfo = (props:TextInfoType) => {
    return (
        <div className={s.textInfoContainer}>
           <h2>{props.title}</h2>
            <Education/>
        </div>
    );
};
