import React from 'react';
import s from "./info.module.scss"

export const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info_module}>
                <ul className={s.ul_info}>
                    <li className={s.li_info}>
                        <span className={s.first_span}>First Name :</span>
                        <span className={s.second_span}>Ilya</span>
                    </li>
                    <li className={s.li_info}>
                       <span className={s.first_span}>Last Name :</span>
                       <span className={s.second_span}>Goncharov</span>
                    </li>
                    <li className={s.li_info}>
                       <span className={s.first_span}>Age :</span>
                       <span className={s.second_span}>29 Years</span>
                    </li>
                </ul>
            </div>
            <div className={s.info_module}>
                <ul className={s.ul_info}>
                    <li className={s.li_info}>
                       <span className={s.first_span}>Address :</span>
                        <span className={s.second_span}>Moscow</span>
                    </li>
                    <li className={s.li_info}>
                        <span className={s.first_span}>Phone :</span>
                        <span className={s.second_span}>+79653080059</span>
                    </li>
                    <li className={s.li_info}>
                        <span className={s.first_span}>Email:</span>
                        <span className={s.second_span}>goncharov.i93@mail.ru</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

