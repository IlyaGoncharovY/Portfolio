import React from 'react';
import s from "./PersonalInfo.module.scss"
import {Info} from "./Info/info";

type PersonalInfoType = {
    title: string
}

export const PersonalInfo = (props: PersonalInfoType) => {
    return (
        <div className={s.personalInfoContainer}>
            <h2>{props.title}</h2>
            <Info/>
        </div>
    );
};
