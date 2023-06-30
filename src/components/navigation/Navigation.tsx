import React from 'react';
import s from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';

export const Navigation = () => {
    return (
        <div className={s.nav}>
            <ul className={s.topNavigation}>
                <li className={s.I}>
                    <div className={s.bodyIcon}>
                        <NavLink to={"/Portfolio"} className={s.linkA}>
                            {<Icon icon="line-md:home" width={"24"} color={"#212529"} className={s.icon}/>}
                            <div className={s.bodyIconChild}>
                                <span className={s.spanEl}>
                                    Home
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </li>
                <li className={s.I}>
                    <div className={s.bodyIcon}>
                        <NavLink to={"/about_me"} className={s.linkA}>
                            {<Icon icon="line-md:account" width={"24"} color={"#212529"}/>}
                            <div className={s.bodyIconChild}>
                                <span className={s.spanEl}>
                                    <div>
                                       About
                                    </div>
                                    <div>
                                        Me
                                    </div>
                               </span>
                            </div>
                        </NavLink>
                    </div>
                </li>
                <li className={s.I}>
                    <div className={s.bodyIcon}>
                        <NavLink to={"/skills"} className={s.linkA}>
                            {<Icon icon="line-md:laptop" width={"24"} color={"#212529"}/>}
                            <div className={s.bodyIconChild}>
                                <span className={s.spanEl}>
                                    Skills
                                </span>
                            </div>
                        </NavLink>
                    </div>

                </li>
                <li className={s.I}>
                    <div className={s.bodyIcon}>
                        <NavLink to={"/projects"} className={s.linkA}>
                            {<Icon icon="line-md:document-code" width={"24"} color={"#212529"}/>}
                            <div className={s.bodyIconChild}>
                                <span className={s.spanEl}>
                                    Project
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </li>
                <li className={s.I}>
                    <div className={s.bodyIcon}>
                        <NavLink to={"/footer"} className={s.linkA}>
                            {<Icon icon="line-md:email-opened" width={"24"} color={"#212529"}/>}
                            <div className={s.bodyIconChild}>
                                <span className={s.spanEl}>
                                    <div>
                                        Call
                                    </div>
                                    <div>
                                         Me
                                    </div>
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </div>

    );
};

