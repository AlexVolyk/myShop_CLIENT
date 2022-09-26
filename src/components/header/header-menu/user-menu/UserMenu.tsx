import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../headermenu.scss'

import { useAppDispatch, useAppSelector } from '../../../../redux/redux'
import { userLogout } from '../../../../redux/slices/userSlice'
import { toast } from 'react-toastify'

const UserMenu = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const location = useLocation()
    const {
        isAdmin,
        userToken
    } = useAppSelector(state => state.user)


    function logout(e: any) {
        e.preventDefault()
        // console.log(location);

        if (userToken) {
            dispatch(userLogout())
            if (location.pathname !== '/') {
                navigate("/", { replace: true })

            }
            toast.success('User logout successfully')

        } else {
            toast.warning('User not already authorized')

        }
    }
    return (
        <div className='HeaderMenu'>
            <ul className='HeaderMenu-list'>
                <li className='HeaderMenu-list-item'>
                    <Link to={'/user'} className='HeaderMenu-list-link'>
                        Account
                    </Link>
                </li>
                {
                    isAdmin && (
                        <li className='HeaderMenu-list-item'>
                            <Link to={'/admin'} className='HeaderMenu-list-link'>
                                Admin
                            </Link>
                        </li>
                    )
                }
                <li className='HeaderMenu-list-item'>
                    <Link to={'/login'} className='HeaderMenu-list-link'>
                        Login
                    </Link>
                </li>
                <li className='HeaderMenu-list-item'>
                    <p className='HeaderMenu-list-link'
                        style={{ cursor: 'pointer' }}
                        onClick={logout}>
                        Logout
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu