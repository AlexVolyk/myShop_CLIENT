import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import './CreateCategory.scss'
import { categories } from '../header/header-menu/categories/categories'


const CreateCategory = () => {
    const initialValues: any = {
        category: '',
    }

    const validationSchema = yup.object({
        category: yup
            .string()
            .required('Category is required')
            .min(3, 'Minimum length')
            .max(40, 'Maximum length'),
    })

    const formik: any = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => console.log(values, ' values')

    })

    function getData() {
        console.log(formik);

    }

    function InputField({ fieldName, label }: any) {

        return (
            <TextField
                style={{
                    width: '100%', margin: '10px 0',
                }}
                label={label}
                focused={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? true : false}
                color={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? 'success' : 'warning'}
                error={formik.errors[fieldName] && formik.touched[fieldName]}
                {...formik.getFieldProps(fieldName)}
                helperText={formik.touched[fieldName] && formik.errors[fieldName] && formik.errors[fieldName]}
            />
        )


    }



    return (
        <div>
            <p>
                CreateCategory
            </p>
            <div style={{
                width: 600
            }}>
                {InputField({ fieldName: 'category', label: 'Category*' })}
                <button
                    onClick={getData}
                    style={{
                        position: 'relative'
                    }}>
                    Submit</button>
            </div>
            <div className='categories-list'>
                <ul>
                    {
                        categories.map(categoty => {
                            return (
                                <li key={categoty.path}>
                                    {categoty.categorie}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CreateCategory