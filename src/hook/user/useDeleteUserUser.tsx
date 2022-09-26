import React from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { deleteUserUser } from '../../api/UserApi';
import { useAppDispatch } from '../../redux/redux';
import { cartReset } from '../../redux/slices/cartSlice';
import { userLogout } from '../../redux/slices/userSlice';

const useDeleteUserUser = (token: any) => {

    const dispatch = useAppDispatch()

    const { 
        isLoading, 
        mutateAsync 
    } = useMutation('login user',
        (values) => deleteUserUser({ 
            token, 
            values 
        })
        ,
        {
            onSuccess: (data, variables, context) => {
                dispatch(userLogout())
                dispatch(cartReset())
                toast.success('🦄' + data.message)
            },
            onError: (error: any, variables, context) => {
                toast.error(error.response.data.message);

            }
            // { enabled: true }
        }

    );


    return {
        isLoading,
        mutateAsync
    }
}

export default useDeleteUserUser