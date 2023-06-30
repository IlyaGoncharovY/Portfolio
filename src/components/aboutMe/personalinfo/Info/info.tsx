import React from 'react';
import s from "./info.module.scss"
import {InfoLeftSet, InfoRightSet} from "../../../../common/data/dataSet";

export const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info_module}>
                <ul className={s.ul_info}>
                    {InfoLeftSet.map((el, index) =><li className={s.li_info} key={index}>
                        <span className={s.first_span}>{el.title}</span>
                        <span className={s.second_span}>{el.description}</span>
                    </li> )}
                </ul>
            </div>
            <div className={s.info_module}>
                <ul className={s.ul_info}>
                    {InfoRightSet.map((el, index)=> <li className={s.li_info} key={index}>
                        <span className={s.first_span}>{el.title}</span>
                        <span className={s.second_span}>{el.description}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

