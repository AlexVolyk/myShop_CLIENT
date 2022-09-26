import React, { useState } from 'react'
import MenuAccardion from '../../../../../styled-component/MenuAccardion'
import aboba from '../../../../../assets/img/aboba.png'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import CategoriesTriangle from '../../../../../styled-component/CategoriesTriangle';

const OrderModalItem = ({ cartProductInfo, totalPrice }: any) => {
    const [open, setOpen] = useState(false)
    console.log(cartProductInfo, 'cartProductInfo');
    const cart_product = cartProductInfo.cart_product[0]
    const { name, product_avatar } = cart_product
    const { total_sum, price, count, product_id } = cartProductInfo

    // /product/AirPods%20Max/2


    return (
        <>
        {/* <div className='accordion-inner'> */}

            <div className='accordion-title-inner'>
                <table>
                    <tr className='accordion-title-inner-grid'>
                        <td className='accordion-title-img-inner'>
                            <img src={aboba} alt="asasda" width={40} height={40} />
                        </td>
                        <td  className='accordion-title-name-inner'>
                            <p>
                            {name}
                            </p>
                            {/* Product name : aboba pro max */}
                        </td>
                        {/* <td>
                            {total_sum}
                        </td> */}
                        {/* Total price : 321341 */}
                        <td className='extend-icon accordion-title-icon-inner'>
                            <CategoriesTriangle open={open} >
                                <ExpandMoreIcon onClick={() => setOpen(prev => !prev)} />
                            </CategoriesTriangle>
                        </td>
                    </tr>
                </table>
            </div>
            <MenuAccardion open={open} className='accordion-table-info-inner'>
                <table className='accordion-table-info'>
                    <tr>
                        <th>
                            {/* avatar */}
                            </th>
                        <th>
                            name
                        </th>
                        <th>
                            price
                        </th>
                        <th>
                            count
                        </th>
                        <th>
                            total price
                        </th>
                        <th>
                            product link
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img src={product_avatar ? product_avatar : aboba} alt="" width={150} height={150} />
                        </td>
                        <td>
                            {name}
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>
                            {count}
                        </td>
                        <td>
                            {total_sum}
                        </td>
                        <td>
                            <Link to={`/product/${name}/${product_id}`}>
                                Redirect to the product page
                            </Link>
                        </td>
                    </tr>
                </table>
            </MenuAccardion>
                        
        {/* </div> */}
        </>
    )
}

export default OrderModalItem