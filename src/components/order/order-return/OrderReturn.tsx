import React from 'react'
// import './OrderProduct.scss'
import OrderProduct from './order-product/OrderProduct'
import './OrderProduct.scss'

const OrderReturn = ({ orderProducts }: any) => {
    // console.log(orderProducts, 'orderProductssdadddddddddddddd');
    
    return (
        <>
            { 
            orderProducts.length ? orderProducts.map((order: any, index: any) => (
                    <React.Fragment key={index}>
                        <OrderProduct orderProduct={order} />
                    </React.Fragment>
                )) : null
            }
        </>
    )
}

export default OrderReturn