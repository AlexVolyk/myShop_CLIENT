import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useCreateOrder from '../../hook/order/useCreateOrder'
import { useAppSelector } from '../../redux/redux'
import CartReturn from './cart-return/CartReturn'
import './Cart.scss'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import './CartTable.scss'
import { SECRET_KEY_STRIPE_CLIENT } from '../../helpers/ApiUrl'
import useTestStripe from '../../hook/test/useTestStripe'
// import { useNavigate } from 'react-router-dom'

const CartTable = () => {
    // const navigate = useNavigate()

    const [total, setTotal] = useState(0)

    const cartProducts = useAppSelector(state => state.cart.cart)
    const cartIds = useAppSelector(state => state.cart.cartIds)


    const token = useAppSelector(state => state.user.userToken)

    const {data, refetch: refetchTest} = useTestStripe()

    const { isLoading, mutateAsync } = useCreateOrder({ token })
    let cartProductsCopy: any = [];
    if (cartProducts !== null) {
        cartProductsCopy = [...cartProducts]
        cartProductsCopy = cartProductsCopy.reverse()

    } else {
        cartProductsCopy = null
    }
    console.log('cartProducts', cartProductsCopy);



    useEffect(() => {
        if (cartProductsCopy != null) {
            let b = cartProductsCopy.reduce((prev: any, current: any) => prev + (current.count * current.price), 0)
            setTotal(b.toFixed(2))
        }


    }, [cartProducts])

    function show() {
        let res: any = {}
        let products_ids = cartIds

        console.log(cartProducts, ' cartProducts');

        for (let i = 0; i < cartProducts.length; i++) {

            let prodId = cartProducts[i].id
            let prod = cartProducts[i]
            let prodOject = { id: prodId, price: prod.price, name: prod.name, count: prod.count }

            res[prodId] = prodOject
        }
        const cart = {
            // products: cartProducts,
            products_ids: products_ids,
            products: res,
            total_sum: total
        }
        let values: any = cart

        console.log(cart, 'cart');
        console.log(cart.products);
        // console.log(SECRET_KEY_STRIPE_CLIENT,'SECRET_KEY_STRIPE_CLIENT');
        // refetchTest()
        
        // console.log(process.env.REACT_APP_MY,'REACT_APP_MY');
        

        mutateAsync(values)
        // toast.warning('maybe buy')
        toast.warning(values)

    }
    useEffect(() => {
        console.log(data);
        if (data?.url) {
            window.location.replace(data.url)
        }
        
    }, [refetchTest, data])


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

    // let int = {
    //     opacity: 0,
    //     // scale: 0,
    //     x: '-110%',
    //     transition: {
    //         duration: 1
    //     }
    // }
    // let exit: any = {
    //     opacity: 0,
    //     transition: {
    //         duration: 1
    //     },
    //     x: '110%',

    //     // x: '-100%'
    //     scale: 0
    // }
    // let ani = {
    //     opacity: 1,
    //     // scale: 1,
    //     x: '0%',

    //     transition: {
    //         duration: 1
    //     }
    // }



    return (
        <>
            {
                cartProductsCopy?.length
                    && cartProductsCopy !== null ? (
                    <>

                        <motion.div className='CartTable'
                            variants={listOrchestration}
                            initial='hidden'
                            animate='show'
                            exit='exit'

                        >
                            {
                                cartProductsCopy.map((cartProduct: any, index: number) => (
                                    // <AnimatePresence key={index}>
                                 //   {/* // <React.Fragment key={index} > */}
                                        <CartReturn
                                            cartProduct={cartProduct}
                                            id={cartProduct.id}
                                            
                                        key={index}
                                        />
                                       // {/* // </React.Fragment> */}
                                        // </AnimatePresence>
                                        ))
                            }
                        </motion.div>
                        <div className='Cart-buy-info'>
                            <div className='Cart-buy-info-inner'>
                                <p className='Cart-buy-info-total'>
                                    <span>Total: </span>{total}
                                </p>
                            </div>
                            <div className='Cart-buy-inner'>
                                <button className='Cart-buy' onClick={show}>Buy</button>
                            </div>
                        </div>
                    </>
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
                        }}> No products in the cart</p>
                    </div>
                )
            }
        </>
    )
}

export default CartTable