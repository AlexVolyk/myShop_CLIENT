import React, {Fragment} from 'react'
import { motion } from 'framer-motion'

const FadeOutIn = ({ children }: any) => {
    let int = {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1
        }
    }
    let exit: any = {
        opacity: 0,
        transition: {
            duration: 1
        },
        // x: '-100%'
        scale: 0
    }
    let ani = {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }

    return (
        <motion.p
            className='FadeOutIn'
            initial={int}
            exit={exit}
            animate={ani}
        >
            {children}
        </motion.p>
    )
}

export default FadeOutIn