import React from 'react';
import s from "./info.module.scss"
export const Info = () => {
    return (
        <div className={s.info}>
            <div>
                <ul>
                    <li>First Name : Ilya</li>
                    <li>Last Name : Goncharov</li>
                    <li>Age : 29 Years</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Address : Moscow</li>
                    <li>Phone : +79653080059</li>
                    <li>Email : goncharov.i93@mail.ru</li>
                    <li> <a href={"https://t.me/ilyaGoncharov93"}>Telegram : ilyaGoncharov93</a></li>
                </ul>
            </div>
        </div>
    );
};

