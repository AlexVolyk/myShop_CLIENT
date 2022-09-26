import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useProductsSearch from '../../../hook/useProductsSearch'
import { useAppSelector, useAppDispatch } from '../../../redux/redux'
import { setTotalProductsAmount } from '../../../redux/slices/filterSlice'
import { setTotalSearchPages } from '../../../redux/slices/pageSlice'
import { setSearchProducts } from '../../../redux/slices/searchSlice'

const ProductsListSearch = ({ productsCards }: any) => {

    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('search'), 'searchParams');
    let searchFromUrl = searchParams.get('search')


    const totalSearchPages = useAppSelector(state => state.pagination.totalSearchPages)

    // const currentPage = useAppSelector(state => state.pagination.currentPage)
    const currentSearchPage = useAppSelector(state => state.pagination.currentSearchPage)

    const currentPage = currentSearchPage



    const dispatch = useAppDispatch()


    const [data, setData] = useState<any>([])

    const searchProducts = useAppSelector(state => state.search.searchProducts)
    console.log(searchProducts, 'searchProducts');
    let search = useAppSelector(state => state.search.search)
    search = search.length <= 1 && searchFromUrl ? searchFromUrl : search
    const { data: d, error, isLoading, refetch, isError } = useProductsSearch({ search, currentPage })

    useEffect(() => {
        refetch()
        if (d?.products) {
            console.log(error,'errorerrorerrorerrorssssssss');
            
            console.log(d, 'sssss');
            dispatch(setSearchProducts(d?.products))
            if (totalSearchPages !== d?.result[0].totalPages || totalSearchPages !== d?.result[0].totalProducts) {
                dispatch(setTotalSearchPages(d?.result[0].totalPages))
                dispatch(setTotalProductsAmount(d?.result[0].totalProducts))

            }

        }
    }, [d, currentPage])



    return (

        <>
            {
                searchProducts.length > 0 ?
                    productsCards(searchProducts)
                    :
                    <p>Products not found</p>
            }
        </>
    )
}

export default ProductsListSearch