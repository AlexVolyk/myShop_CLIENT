import React from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { updateUserUser } from '../../api/UserApi';

const useUpdateUserUser = (token: any) => {


    const {
        isLoading,
        mutateAsync
    } = useMutation('login user',
        (values) => updateUserUser({
            token,
            values
        })
        ,
        {
            onSuccess: (data, variables, context) => {
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

export default useUpdateUserUser