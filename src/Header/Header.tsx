import React from 'react';
import s from "./Header.module.css"
import {Navigation} from "../Navigation/Navigation";


export const Header = () => {
    return (
        <div className={s.header}>
            <Navigation/>
        </div>
    );
};

