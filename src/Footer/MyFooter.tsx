import React from 'react';
import s from "./MyFooter.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";
import {Social} from "../common/components/Social/Social";

type ValuesType = {
    name?: string;
    email?: string;
    message?: string;
}


export const MyFooter = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
        validate: (values) => {
            const errors: ValuesType = {}

            if (!values.email) {
                errors.email = 'required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.message.length < 2) {
                errors.message = 'message must be more two symbols'
            }

            return errors
        },
    });

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title title={"Contact"} titleBg={"Contact"}/>
                <form onSubmit={formik.handleSubmit} className={s.formContainer}>
                    <label htmlFor="Name" className={s.label}>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className={s.inputForm}
                    />

                    <label htmlFor="Email" className={s.label}>Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={s.inputForm}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <div style={{color: 'red', opacity: 0.8}}>{formik.errors.email}</div>}

                    <label htmlFor="Message" className={s.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className={s.inputForm}
                    />
                    {formik.touched.message && formik.errors.message &&
                        <div style={{color: 'red', opacity: 0.8}}>{formik.errors.message}</div>}

                    <button type="submit" className={s.buttonForm}>Submit</button>
                </form>
                <Social/>
            </div>
        </div>
    );
};

