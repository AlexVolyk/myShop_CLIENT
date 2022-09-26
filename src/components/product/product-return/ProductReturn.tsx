import React, { useState } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import CounterBtn from '../../counter-btn/CounterBtn';
import ProductImgs from '../product-imgs/ProductImgs';
import { addToCart, addToCartIds } from '../../../redux/slices/cartSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductReturn = ({ product }: any) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [like, setLike] = useState<boolean>(false)
    const [count, setCount] = useState<number>(1)
    const cart = useAppSelector(state => state.cart.cart)
    const cartIds = useAppSelector(state => state.cart.cartIds)


    const { id, name, price, product_avatar } = product

    let productToCart = {
        id,
        name,
        price,
        product_avatar,
        count
    }

    function cartAddinLogic(nav: boolean = false) {
        let isExist = false
        // console.log(cart, 'cart');
        // console.log(cartIds, 'cartIds');
        // console.log(productToCart, 'productToCart');
        for (const id of cartIds) {
            if (id === productToCart.id) {
                isExist = true
                break;
            }
        }
        if (!isExist) {
            dispatch(addToCartIds(productToCart.id))
            dispatch(addToCart(productToCart))
            toast.success('Added to cart')

            if (nav) {
                navigate('/cart', { replace: true })

            }

        } else {
            toast.warning('Product are already in the cart')

        }
    }

    const buy = () => cartAddinLogic(true)
    const toCart = () => cartAddinLogic()

    // console.log(product);

    return (
        <>
            <div>
                <p
                    style={{
                        textTransform: 'capitalize',
                        fontSize: 30
                    }}
                >
                    {product.name}</p>
                <div className="ProductTable-img-inner">
                    <ProductImgs
                        product={product}
                    />
                </div>
            </div>
            <div className="ProductTable-actions">
                <FavoriteIcon
                    className='ProductTable-actions-like'
                    style={{ color: like ? 'red' : '' }}
                    onClick={() => setLike(prev => !prev)}
                />
                <CounterBtn
                    count={count}
                    setCount={setCount}
                />
                <div className='ProductTable-actions-btn-inner'>
                    <button className='ProductTable-actions-btn' onClick={buy}>buy</button>
                    <button className='ProductTable-actions-btn' onClick={toCart}>to cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductReturn