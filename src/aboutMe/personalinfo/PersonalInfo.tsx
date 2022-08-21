import React from 'react';
import s from "./PersonalInfo.module.scss"
import {Info} from "./info";

export const PersonalInfo = () => {
    return (
        <div className={s.personalInfoContainer}>
            <h2>Personal info</h2>
            <Info/>
        </div>
    );
};
