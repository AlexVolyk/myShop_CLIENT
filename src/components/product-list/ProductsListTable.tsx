import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import ProductsTableProduct from './products-table-product/ProductsTableProduct'
import './ProductsListTable.scss'

import ProductFilter from '../filter/ProductFilter'
import { useAppSelector } from '../../redux/redux'
import ProductsListReturn from './products-list-return/ProductsListReturn'
import ProductsListSearch from './products-list-search/ProductsListSearch'


import { AnimatePresence, motion } from 'framer-motion'
import FadeOutIn from '../framer-motion/FadeOutIn'

type inProductType = {
    description: string,
    id: number,
    name: string,
    price: number,
    product_avatar: string,
    type: string
}
type productType = {
    d: any[]
}

const ProductsListTable = () => {
    const location = useLocation()
    // let [searchParams, setSearchParams] = useSearchParams();

    const totalProductsAmount = useAppSelector(state => state.filter.totalProductsAmount)


    // console.log(location.pathname.includes('search'), 'here if we get location Searching we will change data >>> data will be get from search request');
    // console.log(searchParams.getAll('what'), 'here if we get location Searching we will change data >>> data will be get from search request');
    // console.log(setSearchParams, 'here if we get location Searching we will change data >>> data will be get from search request');


    const productsCards = (d: any) => d.map((product: inProductType, index: number) =>
    // {
    // console.log(product,'product');
    // // console.log(product.);


    // return (
    (
        <React.Fragment key={index}>
            <Link to={'/product/' + product.name + '/' + product.id} className='ProductsListTable-products-link'>
                <ProductsTableProduct product={product} />
            </Link>
        </React.Fragment>
    )
        // }
    )
    let int = {
        opacity: 0,
        // scale: 0,
        x: '130%',
        transition: {
            duration: 1
        }
    }
    let exit: any = {
        opacity: 0,
        // scale: 0,
        x: '130%',
        transition: {
            duration: 1
        },
        // x: '-100%'
    }
    let ani = {
        opacity: 1,
        // scale: 1,
        x: '0%',
        transition: {
            duration: 1
        }
    }

    return (
        <div className="ProductsListTable">
            <p>Amount   {totalProductsAmount}</p>
            <div className='ProductsListTable-products' style={{ display: 'flex' }}>
                {
                    !location.pathname.includes('search') &&
                    <ProductFilter />
                }
                <motion.div
                    className='ProductsListTable-products-inner'
                    initial={int}
                    animate={ani}
                    exit={exit}
                >
                    {!location.pathname.includes('search') ?
                        (
                            <ProductsListReturn productsCards={productsCards} />
                        )
                        :
                        (
                            <ProductsListSearch productsCards={productsCards} />
                        )
                    }
                    {/* {products} */}
                </motion.div>
            </div>
            <Pagination locationPathname={location.pathname} />
        </div>
    )
}

export default ProductsListTable