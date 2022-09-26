import { motion, useViewportScroll } from 'framer-motion'
import
// React, 
{ useEffect } from 'react'
import useGetUserOrders from '../../hook/order/useGetUserOrders'
import { useAppSelector, useAppDispatch } from '../../redux/redux'
import { addToOrder } from '../../redux/slices/orderSlice'
import OrderReturn from './order-return/OrderReturn'
import './OrderTable.scss'

const OrderTable = () => {
    const token = useAppSelector(state => state.user.userToken)
    const dispatch = useAppDispatch()
    const {
        data,
        error,
        isLoading,
        refetch
    } = useGetUserOrders(token)
    // console.log(data, 'here we get data');
    useEffect(() => {
        if (data) {
            dispatch(addToOrder(data.result))
        }
        refetch()
    }, [data, error, isLoading, dispatch, refetch])
    const orderProducts = useAppSelector(state => state.order.orders)
    // console.log(orderProducts,'orderProducts');

    let newOrderProducts = [...orderProducts]
    // newOrderProducts = newOrderProducts.reverse()
    // console.log(orderProducts, 'newOrderProductsnewOrderProducts');



    const listOrchestration: any = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                when: 'afterChildren'
            }
        }
    }


    const { scrollYProgress } = useViewportScroll()
    return (
        <>
            {newOrderProducts.length > 2 && (
                <motion.div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#1ec687',
                    transformOrigin: 'left',
                    scaleX: scrollYProgress,
                    zIndex: 999
                }} />
            )}
            <motion.div
                className='OrderTable'
                variants={listOrchestration}
                initial='hidden'
                animate='show'
                exit='exit'
            >
                {
                    newOrderProducts.length ? (
                        <OrderReturn orderProducts={newOrderProducts} />
                    ) : (
                        <div style={{
                            minHeight: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <p style={{
                                fontSize: '3rem',
                                fontWeight: '500'
                            }}> No orders yet</p>
                        </div>
                    )
                }
            </motion.div>
        </>
    )
}

export default OrderTable