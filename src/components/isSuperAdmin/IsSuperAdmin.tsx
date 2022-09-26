import React from 'react'
import { Outlet } from 'react-router-dom'


const IsSuperAdmin = () => {
    const superAdminToken = false;
    return (
        <>
        {
            superAdminToken ?
            <Outlet />
            :
            <p style={{textAlign: 'center'}}>
                You have no power there.
            </p>

        }
        </>
    )
}

export default IsSuperAdmin