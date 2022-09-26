import React from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux/redux'
import AdminNavBar from '../admin-navbar/AdminNavBar'


const IsUserLogin = () => {
    const adminToken = useAppSelector(state => state.admin.adminToken);
    const isAdmin = useAppSelector(state => state.user.isAdmin)

    let location = useLocation()


    // console.log({from: location.pathname});
    return (
        // adminToken && 
        // isAdmin && adminToken ?
        true ?

        <>
            <div style={{
                display: 'flex',
                minHeight: '100vh'
            }}>
                <AdminNavBar />
                <div style={{
                    // background: 'blue',
                    flex: 10
                }}>
                    <Outlet />
                </div>
            </div>
        </>
        : <Navigate to={'/admin/login'} state={{ from: location }} replace />
    )
}

export default IsUserLogin