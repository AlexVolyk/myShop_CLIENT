import React, { useState } from 'react'
import './OrderModal.scss'
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import OrderModalItem from './order-modal-item/OrderModalItem';

const OrderModal = ({ unshow, cart_info, totalPrice }: any) => {
  // console.log(cart_info, totalPrice, '++++++++++++++++++++++');


  let int = {
    // y: -1000,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
  let exit: any = {
    opacity: 0,
    transition: {
      duration: 0.3
    },
  }
  let ani = {
    // y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }

  return (
    // <AnimatePresence>
      <motion.div className='OrderModal'
        initial={int}
        animate={ani}
        exit={exit}>
        <CloseIcon className='OrderModal-button' onClick={unshow} />
        <div className='OrderModal-content'>
          {
            cart_info.map((cartProductInfo:any) =>
              <OrderModalItem
              cartProductInfo={cartProductInfo}
                totalPrice={totalPrice}
              />
              
            )
          }
          {/* <div>
            <img src={aboba} alt="" width={400} height={200}/>
          </div>
          <div>
          <p className='OrderModal-content-text'>
            OrderModal
          </p>
          </div> */}
        </div>
      </motion.div>
    // </AnimatePresence>
  )
}

export default OrderModal