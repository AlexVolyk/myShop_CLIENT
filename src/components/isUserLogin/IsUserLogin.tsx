import React from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux/redux'


const IsUserLogin = () => {
    const userToken = useAppSelector(state => state.user.userToken)

    let location = useLocation()


    // console.log({from: location.pathname});

    return (
        userToken ?
            <Outlet />
            : <Navigate to={'/login'} state={{ from: location }} replace />
    )
}

export default IsUserLogin