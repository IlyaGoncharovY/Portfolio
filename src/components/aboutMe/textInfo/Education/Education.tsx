import React from 'react';
import s from "./Education.module.scss"
import {EducationSet} from "../../../../common/data/dataSet";
export const Education = () => {
    return (
        <div>
            <ul className={s.educContainer}>
                {EducationSet.map((el, index) => <li className={s.resume_box_li} key={index}>
                    <h3>{el.title}</h3>
                    <div className={s.text_ed}>{el.description}</div>
                </li>)}
            </ul>
        </div>
    );
};

