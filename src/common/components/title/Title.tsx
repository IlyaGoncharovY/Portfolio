import React from 'react';
import s from "./Title.module.scss"


type TitleType = {
    title: string
    titleBg?: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
            <div className={s.titleBg}>{props.titleBg}</div>
        </div>
    );
};

