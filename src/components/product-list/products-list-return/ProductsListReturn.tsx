import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useProductsList from '../../../hook/useProductsList'
import { useAppSelector, useAppDispatch } from '../../../redux/redux'
import { setTotalProductsAmount, setMinimumPrice, setMaximumPrice } from '../../../redux/slices/filterSlice'
import { setTotalListPages, } from '../../../redux/slices/pageSlice'

const ProductsListReturn = ({ productsCards }: any) => {
    const currentListPage = useAppSelector(state => state.pagination.currentListPage)
    const currentPage = currentListPage

    // console.log(productsCards);


    const dispatch = useAppDispatch()
    const {
        maximumCurrentPrice,
        minimumCurrentPrice,
        filter
    } = useAppSelector(state => state.filter)

    const [data, setData] = useState<any>([])


    const {
        // refetch: ProductsListRefetch,
        data: d,
        isLoading } = useProductsList({ filter, minimumCurrentPrice, maximumCurrentPrice, currentPage })
    useEffect(() => {
        // ProductsListRefetch()

        if (d?.products) {
            // console.log('ss');

            setData(d?.products)

        }
        if (d?.result[0]) {
            dispatch(setTotalListPages(d?.result[0].totalPages))

            dispatch(setTotalProductsAmount(d?.result[0].totalProducts))
            dispatch(setMinimumPrice(d?.result[0].minPrice))
            console.log(d?.result[0].maxPrice, 'maxPricemaxPricemaxPricemaxPrice')

            dispatch(setMaximumPrice(d?.result[0].maxPrice) || 0)

        }
    }, [filter, minimumCurrentPrice, maximumCurrentPrice, currentPage, isLoading])

    return (
        <>
            {
                data.length > 0 ?
                    productsCards(data)
                    :
                    <p>Products not found</p>
            }
        </>
    )
}

export default ProductsListReturn