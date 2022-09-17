import React from 'react';
import s from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';

export const Navigation = () => {
    return (
        <div className={s.nav}>
            <ul className={s.topNavigation}>
                <li className={s.I}><NavLink to={"/Portfolio"}>{<Icon icon="line-md:home" width={"24"} color={"#212529"}/>}</NavLink></li>
                <li className={s.I}><NavLink to={"/about_me"}>{<Icon icon="line-md:account" width={"24"} color={"#212529"}/>}</NavLink></li>
                <li className={s.I}><NavLink to={"/skills"}>{<Icon icon="line-md:laptop" width={"24"} color={"#212529"}/>}</NavLink></li>
                <li className={s.I}><NavLink to={"/projects"}>{<Icon icon="line-md:document-code" width={"24"} color={"#212529"}/>}</NavLink></li>
                {/*<li className={s.I}><NavLink to={"/contacts"}>{<Icon icon="line-md:email-opened" width={"30"} color={"#212529"}/>}</NavLink></li>*/}
                <li className={s.I}><NavLink to={"/footer"}>{<Icon icon="line-md:email-opened" width={"24"} color={"#212529"}/>}</NavLink></li>
            </ul>
        </div>

    );
};

