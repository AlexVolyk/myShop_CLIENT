import React, { useEffect, useState } from 'react'
import useGetUserUser from '../../../hook/user/useGetUserUser'
import { useAppDispatch, useAppSelector } from '../../../redux/redux'
import { setUserData, setUserAddress } from '../../../redux/slices/userSlice'
import UserReturn from '../user-return/UserReturn'
import './usertable.scss'


const UserTable = () => {
    let dispatch = useAppDispatch()
    const userToken = useAppSelector(state => state.user.userToken)
    const { data, error, isLoading, refetch } = useGetUserUser(userToken)
    const [user, setUser] = useState({})

    useEffect(() => {
        if (data?.user) {
            console.log(data, 'data');
            setUser({
                ...data.user,
                ...data.user.address
            })
            dispatch(setUserData(data.user))
            if (data?.user?.address) {
                dispatch(setUserAddress(data.user.address))

            }

        }
    }, [isLoading, data])



    return (
        <>
            <div className='UserTable-inner'>
                <UserReturn user={user} />
            </div>
        </>
    )
}

export default UserTable