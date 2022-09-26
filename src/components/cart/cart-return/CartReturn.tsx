import React, { useEffect, useState } from 'react'
import { ApiUrl } from '../../../helpers/ApiUrl'
import { useAppDispatch } from '../../../redux/redux'
import { removeFromCart, incrementCount, decrementCount, removeFromCartIds } from '../../../redux/slices/cartSlice'
import CounterBtn from '../../counter-btn/CounterBtn'
import './CartReturn.scss'
// import '../cart-product/CartProduct.scss'


import { AnimatePresence, motion, } from 'framer-motion'

let itemOrchestration = {
    hidden: {
        opacity: 0,
        // scale: 0,
        x: '-110%',
        transition: {
            duration: 1
        }
    },
    show: {
        opacity: 1,
        x: '0%',

        transition: {
            duration: 1
        }
    },
    // exit: {
    //     opacity: 0,
    //     transition: {
    //         duration: 1
    //     },
    //     x: '110%',
    // }
}
let exit: any = {
    opacity: 0,
    transition: {
        duration: 1
    },
    x: '110%',

    // x: '-100%'
    // scale: 0
}

type CartReturnType = {
    cartProduct: any,
    id: number
}


const CartReturn = ({ cartProduct, id }: CartReturnType) => {
    const dispatch = useAppDispatch()
    // const [counter, setCounter] = useState(count)
    // console.log(id, 'i--------d');

    // console.log(cartProduct, 'sssssssssssss');

    function removeFromProduct() {
        dispatch(removeFromCart(id))
        dispatch(removeFromCartIds(id))

    }

    return (
        <>
            {/* <AnimatePresence> */}

            <motion.div
                variants={itemOrchestration}
                // initial={int}
                // exit={{
                //     opacity: 0,
                //     transition: {
                //         duration: 1
                //     },
                //     x: '110%',
                // }}
                // animate={ani} 
                className='CartProduct'>
                <div>
                    <p className='CartProduct-product-name'>{cartProduct.name}</p>
                    <div className='CartProduct-product_avatar-inner'
                    >
                        <img
                            src={ApiUrl + '/' + cartProduct.product_avatar}
                            alt={cartProduct.name}
                            className='CartProduct-product_avatar'
                        />
                    </div>
                </div>
                <div className='CartTable-product-info'>
                    <CounterBtn
                        count={cartProduct.count}
                        setIncrement={incrementCount}
                        setDecrement={decrementCount}
                        id={id}
                    />
                    <div className='CartTable-product-remove-inner'>
                        <button className='CartTable-product-remove' onClick={removeFromProduct}>Remove
                        </button>
                    </div>
                    <p className='CartTable-product-price'>
                        <span>
                            Price:
                        </span> ${cartProduct.price}
                    </p>
                </div>
            </motion.div>
            {/* </AnimatePresence> */}
        </>
    )
}

export default CartReturn