import React from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../../api/UserApi';
import { useAppDispatch } from '../../redux/redux';
import { setToken, setAvatar, setUserData } from '../../redux/slices/userSlice';

const useUserRegister: any = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { 
        isLoading, 
        mutateAsync 
    } = useMutation('login user',
        (values) => registerUser(values),
        {
            onSuccess: (data, variables, context) => {

                dispatch(setToken(data.sessionToken))
                dispatch(setAvatar(data.user.avatar))
                dispatch(setUserData(data.user))

                toast.success('🦄' + data.message)
                navigate('/')

            },
            onError: (error: any, variables, context) => {
                // console.log(error.response.data.message);
                
                toast.error(error.response.data.message);

            }

        }

        // { enabled: true }
    );


    return {
        isLoading,
        mutateAsync
    }
}

export default useUserRegister