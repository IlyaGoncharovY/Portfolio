import React from 'react';
import s from "./SButton.module.css"

type SButtonType = {
    title: string
}

export const SButton = (props:SButtonType) => {
    return (
        <div className={s.button}>
            <button className={s.buttonHov}>{props.title}</button>
        </div>
    );
};

