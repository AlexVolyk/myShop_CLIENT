import React, { useState } from 'react'
import { useFormik } from 'formik'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import * as yup from 'yup'
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import useCreateProduct from '../../hook/product/useCreateProduct';
import { useAppSelector } from '../../redux/redux';


const CreateProduct = () => {
  const token = useAppSelector(state => state.admin.adminToken)
  const [futureAvatar, setFutureAvatar] = useState(null)
  const [avatar, setAvatar] = useState<any>(null)


  const {isLoading, mutateAsync} = useCreateProduct(token)

  function previewImg(e: any) {
    let file = e.target.files[0];
    setAvatar(file)

    file = URL.createObjectURL(file)
    setFutureAvatar(file)
}

  const initialValues: any = {
    name: '',
    price: '',
    type: '',
    description: '',
    product_avatar: '',
    product_imgs: [] // one img in DB for a row
  }

  const types = ['designer', 'development', 'product', 'other'];

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Product name is required')
      .min(3, 'Minimum length')
      .max(40, 'Maximum length'),
    price: yup
      .string()
      .required('Product name is required')
      .min(3, 'Minimum length')
      .max(40, 'Maximum length'),
    type: yup
      .mixed()
      .oneOf(
        ['designer', 'development', 'product', 'other'],
        'Invalid Job Type'
      )
      .required('Product name is required'),
    description: yup
      .string()
      .required('Product name is required')
      .min(3, 'Minimum length')
      .max(2000, 'Maximum length'),

  })

  const formik: any = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values, ' values')

  })

  const getData = async () => {
    // console.log(formik.values);
    // console.log(formik);

    let formData: any = await new FormData()
    const formikValues = await formik.values
    await formData.append('name', formikValues.name)
    await formData.append('price', formikValues.price)
    await formData.append('type', formikValues.type)
    await formData.append('description', formikValues.description)
    await formData.append('product_avatar', avatar)
    await console.log(formData);
    // const f:any = formData
    
    

    await mutateAsync(formData)

    // console.log(formik.values[fieldName].length);

  }

  const customOnChange = (e: any, fieldName: string) => {
    let value = e.target.value

    if (value.length == 0) {
      // console.log('there');
      formik.setFieldValue(fieldName, '')

    } else {
      let res = value.match(/^[0-9]+\.?[0-9]*$/gmi); // array of matches: 7,9,0,3,1,2,3,4,5,6,7
      res = res.join('')
      formik.setFieldValue(fieldName, res)

    }
  }


  function InputField({ fieldName, label, show, isPassword = false, select = false, onChange = false }: any) {

    if (select) {
      return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"
            focused={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? true : false}
            color={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? 'success' : 'secondary'}
            error={formik.errors[fieldName] && formik.touched[fieldName]}
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={label}
            focused={!formik.errors[fieldName] && formik.values[fieldName].length > 0 ? true : false}
            error={formik.errors[fieldName] && formik.touched[fieldName]}
            {...formik.getFieldProps(fieldName)}
          >
            {
              types.map(type => <MenuItem value={type} key={type} >{type.toUpperCase()}</MenuItem>)
            }
          </Select>
          {
            formik.touched[fieldName] && formik.errors[fieldName]
            && (
              <FormHelperText
                error={formik.errors[fieldName] && formik.touched[fieldName]}
              >
                {formik.errors[fieldName]}
              </FormHelperText>
            )
          }
        </FormControl>
      )
    }

    if (onChange) {
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
          onChange={(e: any) => customOnChange(e, fieldName)}
          helperText={formik.touched[fieldName] && formik.errors[fieldName] && formik.errors[fieldName]}
        />
      )
    }

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
          helperText={formik.touched.password && formik.errors.password && formik.errors.password}
        />
      )

    } else {
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


  }
  return (
    <div>
      <p>
        CreateProduct
      </p>
      <div
        className='aboba-form'
        style={{
          width: '50%',
          margin: '0 auto'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '600px',
              height: '350px',
              margin: '0 auto',
              borderRadius: 'none !important'
            }}
          >
            <label htmlFor="avatarNameId" style={{ cursor: 'pointer', display: 'block' }}>
              <img src={futureAvatar ? futureAvatar : 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'}
                alt=""
                className='RegisterTable-avatar'
                style={{
                  borderRadius: 'none !important',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </label>
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
                id='avatarNameId'
                onChange={previewImg}
              />
            </label>
          </div>
        </div>
        {InputField({ fieldName: 'name', label: 'Product name*' })}
        {InputField({ fieldName: 'price', label: 'Price*', onChange: true })}
        {InputField({ fieldName: 'description', label: 'Description*' })}
        {InputField({ fieldName: 'type', label: 'Types*', select: true })}
      </div>
      <br />
      <br />
      <br />
      <button
        onClick={getData}
        style={{
          position: 'relative'
        }}>
        Submit</button>
    </div>
  )
}

export default CreateProduct