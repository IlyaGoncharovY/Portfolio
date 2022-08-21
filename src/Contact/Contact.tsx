import React from 'react';
import s from "./Contact.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";


export const Contact = () => {
    return (
        <div className={s.myContactBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <Title title={"My contacts"}/>
                <form className={s.inputBox}>
                   <ul>
                       <li>Address</li>
                       <li>Email</li>
                       <li>Telegram</li>
                       <li>GitHub</li>
                   </ul>
                </form>
            </div>
        </div>
    );
};

