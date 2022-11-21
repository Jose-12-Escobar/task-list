import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Reference from 'yup/lib/Reference';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is requiered'),
        password: Yup.string()
            .required('Password is requiered')
    }
)



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // **** Initial values that the form will take ****
                initialValues={initialCredentials}
                // *** Yuo Validation schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localstorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Erros */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage component="div" name="email" />
                            )

                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />

                        {/* Password Erros */}
                        {
                            errors.password && touched.password &&
                            (

                                <ErrorMessage component="div" name="password" />
                            )
                        }

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}


            </Formik>
        </div>
    );
}

export default LoginFormik;
