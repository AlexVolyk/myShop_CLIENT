import React from 'react'
import AuthTable from '../components/auth/AuthTable'
import FadeOutIn from '../components/framer-motion/FadeOutIn'


// import { useLocation } from 'react-router-dom'
// import LoginTable from '../login/LoginTable'
// import RegisterTable from '../register/RegisterTable'

const Register = () => {
    // let loc = useLocation()
    // console.log(loc);
    
    
        // <FadeOutIn>
        // {/* </FadeOutIn> */}
    return (
            <div className='Auth' style={{padding:'60px 0'}}>
                <AuthTable />
            </div>
    )
}

export default Register
