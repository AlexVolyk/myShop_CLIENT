import React from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../api/UserApi';
import { useAppDispatch } from '../../redux/redux';
import { setToken, setAvatar, setUserData } from '../../redux/slices/userSlice';

const useUserLogin = (prevLocation: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        isLoading,
        mutateAsync
    } = useMutation('login user',
        (values) => loginUser(values)
        ,
        {
            onSuccess: (data, variables, context) => {
                dispatch(setToken(data.userSessionToken))
                dispatch(setAvatar(data.user.avatar))
                dispatch(setUserData(data.user))

                toast.success('🦄' + data.message)
                if (prevLocation) {
                    navigate(prevLocation, { replace: true })

                } else {
                    navigate('/')

                }
            },
            onError: (error: any, variables, context) => {
                // console.log('context', context);
                // console.log('NOOO')
                // console.log(prevLocation, 'prevLocation');
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

export default useUserLogin