import React, { useEffect } from 'react'
import { useAppSelector } from '../../redux/redux'
import Testing from '../../Testing'
import ProductCheckboxFilter from './checkbox-filter/ProductCheckboxFilter'
import './ProductFilter.scss'


const ProductFilter = () => {
    const filter = useAppSelector(state => state.filter.filter)

    useEffect(() => {
        console.log(filter, 'filter fffff');
    }, [filter])


    return (
        <div className='ProductFilter'>
            <Testing />
            <ul className='ProductFilter-list'>
                <ProductCheckboxFilter />
            </ul>
        </div>
    )
}

export default ProductFilter