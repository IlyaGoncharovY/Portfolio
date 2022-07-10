import React from 'react';
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Contauner.module.css";
import {SButton} from "../workOption/Button/SButton";


export const Contact = () => {
    return (
        <div className={s.myContactBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <h2 className={s.title}> My Contacts</h2>
                <form className={s.inputBox}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <SButton title={"Отправить"}/>
            </div>
        </div>
    );
};

