import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { createProduct } from '../../api/ProductApi'

const useCreateProduct = (token:string | null) => {
    const {
        mutateAsync,
        isLoading
    } = useMutation('create product',
        (values) => createProduct(values, token),
        {
            onSuccess: (data, variables, context) => {
                toast.success(data.message)
            },
            onError: (error: any, variables, context) => {
                toast.error(error.response.data.message)
            }
        }
    );

    return {
        mutateAsync,
        isLoading
    }
}

export default useCreateProduct