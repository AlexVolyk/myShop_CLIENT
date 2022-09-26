// import { motion } from 'framer-motion';
// import React, { useEffect } from 'react'
// import useGetUserOrders from '../../../../hook/order/useGetUserOrders';
// import { useAppSelector } from '../../../../redux/redux';
// import OrderOneProduct from '../order-one-product/OrderOneProduct';
import OrderProducts from '../order-products/OrderProducts';

import './OrderProduct.scss'


// if (orderProduct.hasOwnProperty('order')) {
//     totalPrice = orderProduct.order.reduce((prev: any, current: any) => prev + (current.price * current.count), 0)

// } else {
//     totalPrice = orderProduct.price * orderProduct.count

// }
const OrderProduct = ({ orderProduct }: any) => {
    // console.log(orderProduct,'---------');
    



    // totalPrice = totalPrice.toFixed(2)
    const totalPrice = orderProduct.total_sum
    const status = orderProduct.product_status
    let cart_info = orderProduct.cart.cart_info

    // console.log(totalPrice,'totalPrice');


    // let itemOrchestration = {
    //     hidden: {
    //         opacity: 0,
    //         // scale: 0,
    //         x: '-110%',
    //         transition: {
    //             duration: 1
    //         }
    //     },
    //     show: {
    //         opacity: 1,
    //         x: '0%',

    //         transition: {
    //             duration: 1
    //         }
    //     },
    //     // exit: {
    //     //     opacity: 0,
    //     //     transition: {
    //     //         duration: 1
    //     //     },
    //     //     x: '110%',
    //     // }
    // }
    return (
        <div
            className='OrderProduct'
        >
            {/* // <motion.div  */}
            {/* // variants={itemOrchestration} */}
            {/* // className='OrderProduct'> */}
            {
                orderProduct && <OrderProducts 
                // orderProduct={orderProduct} 
                totalPrice={totalPrice}
                status={status}
                cart_info={cart_info}
                />
            }
            {/* {
                orderProduct.hasOwnProperty('order') ?
                (
                    <OrderProducts orderProduct={orderProduct} totalPrice={totalPrice} />
                    ) : (
                        <OrderOneProduct orderProduct={orderProduct} totalPrice={totalPrice} />
                        )
                    } */}
            {/* </motion.div> */}
        </div>
    )
}

export default OrderProduct