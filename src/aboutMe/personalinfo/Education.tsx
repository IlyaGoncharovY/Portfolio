import React from 'react';
import s from "./Education.module.scss"
export const Education = () => {
    return (
        <div>
            <ul className={s.educContainer}>
                <li className={s.resume_box_li}>
                   <h3>College of Communication No. 54.</h3>
                    <div className={s.text_ed}>
                        Profession: Communication equipment maintenance technician.
                    </div>
                </li>
                <li className={s.resume_box_li}>
                   <h3>Moscow University of Finance and Industry</h3>
                    <div className={s.text_ed}>
                        Profession: Infocommunication technologies and communication systems
                    </div>
                </li>
                <li className={s.resume_box_li}>
                   <h3>IT-Incubator</h3>
                    <div className={s.text_ed}>
                        Profession: Front-end developer
                    </div>
                </li>
            </ul>
        </div>
    );
};

