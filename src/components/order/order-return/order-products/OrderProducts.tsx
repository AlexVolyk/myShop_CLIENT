import React, { useState } from 'react'
import { ApiUrl } from '../../../../helpers/ApiUrl';
import OrderStatus from '../../../status/OrderStatus'
import OrderModal from '../order-modal/OrderModal';
import { AnimatePresence } from 'framer-motion'


const OrderProducts = ({ totalPrice, status, cart_info }: any) => {
    const [open, setOpen] = useState(false)

    const show = () => setOpen(true)
    const unshow = () => setOpen(false)


    // const OrderProducts = ({ orderProduct, totalPrice, status, cart_info }: any) => {

    let orderProductsImgs = [];
    for (const img of cart_info) {
        if (orderProductsImgs.length === 4) {
            break;

        }

        if (img.cart_product.product_avatar) {
            orderProductsImgs.push(img.cart_product.product_avatar)

        }
    }
    // console.log(orderProductsImgs, 'orderProductsImgs');



    let h = 280
    let w = 280
    let imgsLength = orderProductsImgs.length
    if (imgsLength === 2) {
        // h /= 2
        w /= 2
    } else if (imgsLength >= 3) {
        h /= 2
        w /= 2
    }

    let productsImgs = orderProductsImgs.map((order: any, index: any) => (
        <React.Fragment key={index}>
            <img
                src={ApiUrl + '/' + order}
                alt='s'
                style={{
                    width: w + 'px',
                    height: h + 'px',
                    objectFit: 'cover',
                    padding: '5px'
                }}
            />
        </React.Fragment>
    ))

    let productsAndCount = cart_info.map((order: any, index: any) => {
        // console.log(order,'order');
        // console.log(order.cart_product);
        // console.log(order.cart_product_info[0],'ordercart_product_info -------------');
        // console.log(order, 'roders');



        return (
            <li key={index}>
                {order.cart_product[0].name} / {order.count}
            </li>
        )
    })

    return (
        <>
        <AnimatePresence>
            {
                open &&
                <OrderModal
                unshow={unshow}
                cart_info={cart_info}
                totalPrice={totalPrice}
                />
            }
        </AnimatePresence>
            <div className='Order-img-status-block'>
                <OrderStatus status={status} />
                <div className='OrderTable-Products-img-inner' onClick={show}>
                    {productsImgs}
                </div>
            </div>
            <div className='OrderTable-product-info'>
                <ul className='OrderTable-info-products-list'>
                    {productsAndCount}
                </ul>
                {/* //! if only one item in cart 
                <p className='CartProduct-product-name'>{orderProduct.name}</p> 
                 */}
                <p className='CartTable-product-price'>
                    <span>
                        Total price:
                    </span> ${totalPrice}
                </p>
            </div>
        </>
    )
}

export default OrderProducts