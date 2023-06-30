import s from "./social.module.scss";
import React from 'react';
import {SocialSetType} from "../../../common/data/dataSet";

export const Social = (props: SocialSetType) => {

    return (
        <div>
            <a href={props.href}>
                <div className={s.box} style={props.style}>
                </div>
            </a>
        </div>
    );
};

