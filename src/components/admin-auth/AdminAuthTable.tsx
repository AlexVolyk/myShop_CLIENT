import React from 'react'
// import './AuthTable.scss'
import { useLocation } from 'react-router-dom'
// import LoginTable from './login/LoginTable'
// import RegisterTable from './register/RegisterTable'
import FadeOutIn from '../framer-motion/FadeOutIn'
import AdminLoginTable from './admin-login/AdminLoginTable'
import AdminRegisterTable from './admin-register/AdminRegisterTable'



const AdminAuth = () => {
    let loc = useLocation()

    return (
        // <FadeOutIn>

        //     </FadeOutIn>
        <div className='Auth' style={{padding:'60px 0'}}>

        <div className='AuthTable'>
            {
                loc.pathname.includes('reg') ? (
                    <AdminRegisterTable />
                    ) : (
                        // <FadeOutIn>
                        <AdminLoginTable />
                        
                        // </FadeOutIn>
                        )
                    }
        </div>
                    </div>
    )
}
// <FadeOutIn>

{/* </FadeOutIn> */}

export default AdminAuth