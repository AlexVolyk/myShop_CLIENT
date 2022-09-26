import React, { useState } from 'react'
import './RegisterTable.scss'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileUploadIcon from '@mui/icons-material/FileUpload';


import FadeOutIn from '../../framer-motion/FadeOutIn';
import StepperCountElements from './StepperCountElements';
import useUserRegister from '../../../hook/user/useUserRegister';


export function FormikStep({ children }: any) {
    return (
        <>
            <FadeOutIn>
                {children}
            </FadeOutIn>
        </>
    )
}


const RegisterTable = () => {
    const { isLoading, mutateAsync } = useUserRegister()
    const [show, setShow] = useState(false)
    const [futureAvatar, setFutureAvatar] = useState(null)
    const [avatar, setAvatar] = useState<any>(null)

    const initialValues: any = {
        username: 'alex',
        firstName: 'alex',
        lastName: 'alex',
        email: 'alex@gmail.com',
        password: 'alex',
        country: 'alex',
        city: 'alex',
        post_office: 'alex',
    }

    const validationSchema: any = yup.object({
        username: yup
            .string()
            .min(3, 'Minimum characters'),
        // .('Enter a valid email')
        // .required('Email is required'),
        firstName: yup
            .string()
            .min(2, 'Minimum 2 characters')
            .required('First Name is required'),
        lastName: yup
            .string()
            .min(2, 'Minimum 2 characters')
            .required('First Name is required'),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(3, 'Minimum')
            .required('Password is required'),
        country: yup
            .string()
            .required('Country is required'),
        city: yup
            .string()
            .required('City is required'),
        post_office: yup
            .string()
            .required('Post office is required'),
    })

    const formik: any = useFormik({
        initialValues,
        validationSchema,
        onSubmit: () => {
            console.log('do nothing');
        }

    })

    async function getD(e: any) {
        e.preventDefault()
        let formData = await new FormData()
        await formData.append('img', avatar)
        await formData.append('username', formik.values.username)
        await formData.append('lastName', formik.values.lastName)
        await formData.append('firstName', formik.values.firstName)
        await formData.append('email', formik.values.email)
        await formData.append('password', formik.values.password)
        await formData.append('country', formik.values.country)
        await formData.append('city', formik.values.city)
        await formData.append('post_office', formik.values.post_office)

        // const abob = {
        //     city: formik.values.city
        // }
        // await formData.append('address', abob
        //     // city: formik.values.password
        // )

        // console.log('formData', formData);
        mutateAsync(formData)
    }

    function InputField({ fieldName, label, show, isPassword = false }: any) {
        if (isPassword) {
            return (
                <TextField
                    style={{ width: '100%', margin: '10px 0' }}
                    label={'Password'}
                    type={show ? 'string' : 'password'}
                    focused={!formik.errors.password && formik.values.password.length > 0 ? true : false}
                    color={!formik.errors.password && formik.values.password.length > 0 ? 'success' : 'secondary'}
                    error={formik.errors.password && formik.touched.password}
                    {...formik.getFieldProps('password')}
                    helperText={formik.touched.password && formik.errors.password ? formik.errors.password : 'At least 3 characters must be'}
                />
            )
        } else {
            return (
                <TextField
                    style={{ width: '100%', margin: '10px 0' }}
                    label={label}
                    focused={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? true : false}
                    color={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? 'success' : 'secondary'}
                    error={formik.errors[fieldName] && formik.touched[fieldName]}
                    {...formik.getFieldProps(fieldName)}
                    helperText={formik.touched[fieldName] && formik.errors[fieldName] ? formik.errors[fieldName] : 'At least 3 characters must be'}
                />
            )

        }
    }

    // console.log('render');
    function previewImg(e: any) {
        let file = e.target.files[0];
        setAvatar(file)

        file = URL.createObjectURL(file)
        setFutureAvatar(file)
    }

    function showIcon(Icon: any) {
        return (
            <button
                className='AuthTable-password-show'
                onClick={(e) => {
                    e.preventDefault()
                    setShow(prev => !prev)
                }}
            >
                <Icon />
            </button>
        )
    }


    return (
        <div className='RegisterTable'>
            <h1 style={{ marginBottom: '30px' }}>Register</h1>
            <FormikStepper>
                <FormikStep title='avatar'>
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
                </FormikStep>
                <FormikStep>
                    {InputField({ fieldName: 'username', label: 'Username' })}
                    {InputField({ fieldName: 'firstName', label: 'First Name*' })}
                    {InputField({ fieldName: 'lastName', label: 'Last Name*' })}
                </FormikStep>
                <FormikStep>
                    {InputField({ fieldName: 'email', label: 'Email*' })}
                    <div className='AuthTable-password-inner'>
                        {InputField({ fieldName: 'password', label: 'Password*', show, isPassword: true })}
                        {
                            show ? showIcon(VisibilityIcon) : showIcon(VisibilityOffIcon)
                        }
                    </div>
                </FormikStep>
                <FormikStep>
                    {InputField({ fieldName: 'country', label: 'Country*' })}
                    {InputField({ fieldName: 'city', label: 'City*' })}
                    {InputField({ fieldName: 'post_office', label: 'Post office*' })}
                    <div className='AuthTable-submit-inner'>
                        <button
                            onClick={getD}
                            disabled={isLoading}
                            style={{
                                position: 'relative'
                            }}>
                            {
                                <span className="loader" style={{
                                    opacity: isLoading ? 1 : 0
                                }}></span>
                            }
                            Submit</button>
                    </div>
                </FormikStep>
            </FormikStepper>
        </div>
    )
}

export function FormikStepper({ children, ...props }: any) {
    const childrenArray: any = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    // let newStep = step

    // if (step === childrenArray.length - 1) {
    //     newStep += 1 
    // }

    function isLastStep() {
        // step === childrenArray.length - 1;
        return step === childrenArray.length - 1;
    }

    function isFirstStep() {
        return step <= 0;
    }

    return (
        <>
            <StepperCountElements step={step} />
            <form>
                {currentChild}
            </form>

            <div className='RegisterTable-submit-inner prev-next-btns-inner'
            >
                <button
                    className='prev-btn'
                    style={{
                        visibility: !isFirstStep() ? 'visible' : 'hidden'
                    }}
                    disabled={!isFirstStep() ? false : true}
                    onClick={() => setStep(prev => prev - 1)}
                >prev</button>
                <button
                    className='next-btn'
                    style={{
                        visibility: !isLastStep() ? 'visible' : 'hidden'
                    }}
                    disabled={!isLastStep() ? false : true}
                    onClick={() => setStep(prev => prev + 1)}
                >next</button>
            </div>
        </>
    )
}

export default RegisterTable