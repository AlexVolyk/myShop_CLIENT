import React from 'react'
import not_found from '../assets/img/not_found.svg'
import '../components/notfound/notfound.scss'
import FadeOutIn from '../components/framer-motion/FadeOutIn'


const NotFound = () => {
  return (
    <FadeOutIn>
      <div className='not_found-inner'>
        <object data={not_found} aria-label='logo'></object>
      </div>s
    </FadeOutIn>
  )
}

export default NotFound