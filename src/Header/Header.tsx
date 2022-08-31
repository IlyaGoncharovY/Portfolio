import React from 'react';
import s from "./Header.module.scss"
import {Navigation} from "../Navigation/Navigation";
import {Burger} from "../Navigation/Burger/Burger";


export const Header = () => {
    return (
        <div className={s.header}>
            <Navigation/>
            {/*<Burger/>*/}
        </div>
    );
};

