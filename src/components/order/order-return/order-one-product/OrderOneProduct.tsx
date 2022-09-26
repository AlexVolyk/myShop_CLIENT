import React from 'react'
import { ApiUrl } from '../../../../helpers/ApiUrl';
import OrderStatus from '../../../status/OrderStatus';


const OrderOneProduct = ({ orderProduct, totalPrice}: any) => {

    return (
        <>
            <div className='Order-img-status-block'>
                <OrderStatus orderProduct={orderProduct} />
                <div className='OrderTable-Products-img-inner'>
                    <img
                        src={ApiUrl+'/'+orderProduct.product_avatar}
                        alt={orderProduct.name}
                        className='OrderProduct-product_avatar'
                    />
                </div>
            </div>
            <div className='OrderTable-product-info'>
                <p className='OrderTable-product-name'>{orderProduct.name}</p>
                <p className='OrderTable-product-count'>Amout: {orderProduct.count}</p>
                <p className='OrderTable-product-price'>
                    <span>
                        Price:
                    </span> ${totalPrice}
                </p>
            </div>
        </>
    )
}

export default OrderOneProduct