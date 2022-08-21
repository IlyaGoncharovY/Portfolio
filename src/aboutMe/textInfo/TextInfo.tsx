import React from 'react';
import s from "./TextInfo.module.scss"
import {Education} from "../personalinfo/Education";

export const TextInfo = () => {
    return (
        <div className={s.textInfoContainer}>
           <h2>Education</h2>
            <Education/>
        </div>
    );
};
