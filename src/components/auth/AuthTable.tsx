import React from 'react'
import './AuthTable.scss'
import { useLocation } from 'react-router-dom'
import LoginTable from './login/LoginTable'
import RegisterTable from './register/RegisterTable'
import FadeOutIn from '../framer-motion/FadeOutIn'



const AuthTable = () => {
    let loc = useLocation()

    return (
        // <FadeOutIn>

        //     </FadeOutIn>
        <div className='AuthTable'>
            {
                loc.pathname.includes('reg') ? (
                    <RegisterTable />
                    ) : (
                        // <FadeOutIn>
                            <LoginTable />

                        // </FadeOutIn>
                        )
                    }
        </div>
    )
}
// <FadeOutIn>

{/* </FadeOutIn> */}

export default AuthTable