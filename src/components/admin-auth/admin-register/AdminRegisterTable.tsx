import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useUserLogin from '../../../hook/user/useUserLogin'
import FadeOutIn from '../../framer-motion/FadeOutIn'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileUploadIcon from '@mui/icons-material/FileUpload';



type loginInitialValues = {
    username: string,
    email: string,
    password: string
}


const AdminRegisterTable = () => {
    const loc: any = useLocation()

    let prevLocation: string | null = loc?.state?.from?.state?.from?.pathname ?? null
    // console.log(loc, '----------------');

    // console.log(prevLocation, '----------------');
    const [futureAvatar, setFutureAvatar] = useState(null)
    const [avatar, setAvatar] = useState<any>(null)

    const { isLoading, mutateAsync } = useUserLogin(prevLocation)
    const [show, setShow] = useState(false)

    const initialValues: any = {
        email: 'alex@gmail.com',
        password: 'alex',
    }

    const validationSchema = yup.object({
        username: yup
            .string()
            .min(3, 'Minimum characters'),
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

    function previewImg(e: any) {
        let file = e.target.files[0];
        setAvatar(file)

        file = URL.createObjectURL(file)
        setFutureAvatar(file)
    }


    return (
        <div>
            {/* <FadeOutIn> */}
                <h1>Register admin</h1>
                <form>
                <div style={{ textAlign: 'center' }}>
                        <div className='RegisterTable-avatar-inner'>
                            <img src={futureAvatar ? futureAvatar : 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'} alt="" className='RegisterTable-avatar' />
                        </div>
                        <div style={{
                            width: '28px',
                            margin: '0 auto',
                            background: 'red'
                        }}>
                            <label className='file-inner'>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <FileUploadIcon />
                                </div>
                                <input
                                    className='file'
                                    type="file"
                                    accept='image/*'
                                    onChange={previewImg}
                                />
                            </label>
                        </div>
                    </div>
                    <TextField
                        style={{ width: '100%', margin: '10px 0' }}
                        label={'Username'}
                        focused={!formik.errors.username && formik.values.username?.length > 0 ? true : false}
                        color={!formik.errors.username && formik.values.username?.length > 0 ? 'success' : 'secondary'}
                        error={formik.errors.username && formik.touched.username}
                        {...formik.getFieldProps('username')}
                        helperText={formik.touched.username && formik.errors.username ? formik.errors.username : 'At least 3 characters must be'}
                    />
                    <TextField
                        style={{ width: '100%', margin: '10px 0' }}
                        label={'Email'}
                        focused={!formik.errors.email && formik.values.email?.length > 0 ? true : false}
                        color={!formik.errors.email && formik.values.email?.length > 0 ? 'success' : 'secondary'}
                        error={formik.errors.email && formik.touched.email}
                        {...formik.getFieldProps('email')}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : 'At least 3 characters must be'}
                    />
                    <div className='AuthTable-password-inner'>
                        <TextField
                            style={{ width: '100%', margin: '10px 0' }}
                            label={'Password'}
                            type={show ? 'text' : 'password'}
                            focused={!formik.errors.password && formik.values.password?.length > 0 ? true : false}
                            color={!formik.errors.password && formik.values.password?.length > 0 ? 'success' : 'secondary'}
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
                {/* <p style={{
                    marginTop: '15px'
                }}>
                    Just not have account? <Link to={'/admin/register'}>Register</Link>
                </p> */}
            {/* </FadeOutIn> */}
        </div>
    )
}

export default AdminRegisterTable