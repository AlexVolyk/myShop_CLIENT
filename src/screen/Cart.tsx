import React from 'react'
import CartTable from '../components/cart/CartTable'
import '../components/cart/Cart.scss'
import FadeOutIn from '../components/framer-motion/FadeOutIn'


const Cart = () => {
  return (
    <>
      <FadeOutIn>
        <div className='Cart'>
          <CartTable />
        </div>
      </FadeOutIn>
    </>
  )
}

export default Cart