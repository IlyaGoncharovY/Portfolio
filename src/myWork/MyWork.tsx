import React from 'react';
import s from "./MyWork.module.css"
import styleContainer from "../common/styles/Contauner.module.css";
import {Work} from "./work/Work";


export const MyWork = () => {
    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <h2 className={s.title}> My Work</h2>
                <div className={s.works}>
                    <Work title={"social network"} description={"kak vk, tol`ko kruche"}/>
                    <Work title={"counter"} description={"super puper counter"}/>
                </div>
            </div>
        </div>
    );
};

