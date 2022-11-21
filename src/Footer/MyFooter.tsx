import React, {useState} from 'react';
import s from "./MyFooter.module.scss"
import styleContainer from "../common/styles/Contauner.module.css";
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";
import {Social} from "./Social/Social";
import * as emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import * as yup from 'yup';

const serviceID = "service_lngxx9k"
const templateID = "template_mvzunqb"
const userID = "fja6XHP7FsoUigGZo"

export const MyFooter = () => {

    const [buttonState, setButtonState] = useState<string>('Send Message');

    const formik = useFormik({
        initialValues: {
            from_name: '',
            to_name: "Ilya",
            reply_to: '',
            message: '' ,
        },
        onSubmit: (values) => {
             // alert(JSON.stringify(values, null, 2));
            try{
                emailjs.send(serviceID , templateID, values, userID)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'your message has been sent',
                            timer: 1500
                        })
                        setButtonState('Send Email');
                       formik.setSubmitting(false);
                       formik.resetForm();
                    });
            }
            catch {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
                setButtonState('Send Email');
                formik.setSubmitting(false);
            }
        },
        validationSchema: yup.object({
            from_name: yup.string()
                .required('* Name field is required'),
            reply_to: yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: yup.string().required('* Message field is required')
        })
    });

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title title={"Contact"} titleBg={"Contact"}/>
                <form onSubmit={formik.handleSubmit} className={s.formContainer}>
                    <label htmlFor="Name" className={s.label}>Name</label>
                    <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.from_name}
                        className={s.inputForm}
                    />

                    <label htmlFor="Email" className={s.label}>Email</label>
                    <input
                        id="reply_to"
                        name="reply_to"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.reply_to}
                        className={s.inputForm}
                    />
                    {formik.touched.reply_to && formik.errors.reply_to &&
                        <div style={{color: 'red', opacity: 0.8}}>{formik.errors.reply_to}</div>}

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

                    <button type="submit" className={formik.isSubmitting ? s.buttonDisabled : s.buttonForm} disabled={formik.isSubmitting}>
                        {/*Submit*/}
                        {buttonState}
                    </button>
                </form>
                <Social/>
            </div>
        </div>
    );
};

