import React, { useEffect, useState } from 'react'
import './ProductTable.scss'


import ProductReturn from './product-return/ProductReturn';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiUrl } from '../../helpers/ApiUrl';
import useGetProduct from '../../hook/product/useGetProduct';

const ProductTable = () => {

    const [product, setProduct] = useState({})
    let param = useParams()
    let id: any = param.id
    const { data, error, isLoading, refetch } = useGetProduct(id)
    // console.log(param);

    // let url = `${ApiUrl}/product/${param.id}`
    // async function fetchProduct() {
    //     await axios.get(url)
    //         .then(res => setProduct(res.data.product))
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        // refetch()

        if (data?.product) {
            console.log(data, 'data');

            setProduct(data.product)

        }

    }, [id, data?.product])




    return (
        <div className='ProductTable'>
            <ProductReturn product={product} />
        </div>
    )
}

export default ProductTable