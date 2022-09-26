import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useLocation } from 'react-router-dom'
import FadeOutIn from '../../framer-motion/FadeOutIn'
import { TextField } from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useUserLogin from '../../../hook/user/useUserLogin'


type loginInitialValues = {
    email: string,
    password: string
}

const LoginTable = () => {
    const loc: any = useLocation()

    let prevLocation: string | null = loc?.state?.from?.state?.from?.pathname ?? null
    // console.log(loc, '----------------');

    // console.log(prevLocation, '----------------');
    const { isLoading, mutateAsync } = useUserLogin(prevLocation)

    const [show, setShow] = useState(false)

    const initialValues: any = {
        email: 'alex@gmail.com',
        password: 'alex',
        // email: '',
        // password: '',
    }

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(3, 'Minimum')
            .required('Password is required')
    })
    
    const formik: any = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            // console.log(values);
            mutateAsync(values)
        }
    })

    const showIcon = (Icon: any) => {
        return (
            <button
                className='AuthTable-password-show'
                onClick={(e) => {
                    e.preventDefault()
                    setShow(prev => !prev)
                }}>
                <Icon />
            </button>
        )
    }



    return (
        <div>
            <FadeOutIn>
                <h1>Login</h1>
                <form>
                    <TextField
                        style={{ width: '100%', margin: '10px 0' }}
                        label={'Email'}
                        focused={!formik.errors.email && formik.values.email.length > 0 ? true : false}
                        color={!formik.errors.email && formik.values.email.length > 0 ? 'success' : 'secondary'}
                        error={formik.errors.email && formik.touched.email}
                        {...formik.getFieldProps('email')}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : 'At least 3 characters must be'}
                    />
                    <div className='AuthTable-password-inner'>
                        <TextField
                            style={{ width: '100%', margin: '10px 0' }}
                            label={'Password'}
                            type={show ? 'text' : 'password'}
                            focused={!formik.errors.password && formik.values.password.length > 0 ? true : false}
                            color={!formik.errors.password && formik.values.password.length > 0 ? 'success' : 'secondary'}
                            error={formik.errors.password && formik.touched.password}
                            {...formik.getFieldProps('password')}
                            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : 'At least 3 characters must be'}
                        />
                        {
                            show ? showIcon(VisibilityIcon) : showIcon(VisibilityOffIcon)
                        }
                    </div>
                    <div className='AuthTable-submit-inner'>
                        <button
                            onClick={formik.handleSubmit}
                            disabled={isLoading}
                            style={{
                                position: 'relative'
                            }}
                        >
                            {
                                <span
                                    className="loader"
                                    style={{
                                        opacity: isLoading ? 1 : 0
                                    }}></span>
                            }
                            Submit
                        </button>
                    </div>
                </form>
                <hr />
                <p style={{
                    marginTop: '15px'
                }}>
                    Just not have account? <Link to={'/register'}>Register</Link>
                </p>
            </FadeOutIn>
        </div>
    )
}

export default LoginTable