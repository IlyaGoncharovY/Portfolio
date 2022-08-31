import React, {useState} from 'react';
import s from "./Burger.module.scss"
import {NavLink} from "react-router-dom";
import {Icon} from "@iconify/react";

export const Burger = () => {
    let [open, setOpen] = useState<boolean>(false)

    const openMenu = () => {
        setOpen(!open)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    const burgerStyle = `${s.burgerNavItems} ${open ? s.isShow : ''}`

    return (
        <div className={s.burgerNav}>
            <div className={burgerStyle}>
                <NavLink to={"/Portfolio"}>{<Icon icon="line-md:home" width={"30"} onClick={closeMenu}/>}</NavLink>
                <NavLink to={"/about_me"}>{<Icon icon="line-md:account" width={"30"} onClick={closeMenu}/>}</NavLink>
                <NavLink to={"/skills"}>{<Icon icon="line-md:laptop" width={"30"} onClick={closeMenu}/>}</NavLink>
                <NavLink to={"/projects"}>{<Icon icon="line-md:document-code" width={"30"}
                                                 onClick={closeMenu}/>}</NavLink>
                <NavLink to={"/footer"}>{<Icon icon="line-md:email-opened" width={"30"} onClick={closeMenu}/>}</NavLink>
            </div>
            <div>
                <div className={s.burgerButton} onClick={openMenu}>
                    {open ? <Icon icon={"system-uicons:document-justified"} width={"30"}/> : ""}
                </div>
            </div>
        </div>
    );
};

