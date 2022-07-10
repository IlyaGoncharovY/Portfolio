import React from 'react';
import s from "./MyFooter.module.css"
import styleContainer from "../common/styles/Contauner.module.css";


export const MyFooter = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Илья Гончаров</h2>
                <div className={s.boxContainer}>
                    <div className={s.box}>
                        i
                    </div>
                    <div className={s.box}>
                        l
                    </div>
                    <div className={s.box}>
                        y
                    </div>
                    <div className={s.box}>
                        a
                    </div>
                </div>
            </div>
        </div>
    );
};

