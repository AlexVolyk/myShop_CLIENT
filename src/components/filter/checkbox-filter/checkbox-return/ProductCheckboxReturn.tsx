import React, { useState } from 'react'
import { useAppDispatch } from '../../../../redux/redux'
import { addtoFilter, removeFromFilter } from '../../../../redux/slices/filterSlice'


const ProductCheckboxReturn = ({ checkboxBoolean, name, value }: any) => {
    const dispatch = useAppDispatch()

    function change(e: any) {
        let el = e.target
        if (el.checked) {
            dispatch(addtoFilter(el.value))

        } else {
            dispatch(removeFromFilter(el.value))

        }
    }

    return (
        <li className='ProductFilter-list-item'>
            <label className='ProductFilter-list-label'>
                <input
                    className='checkbox-input'
                    type="checkbox"
                    value={value}
                    checked={checkboxBoolean}
                    onChange={change} />
                <span className='checkbox'></span>
                <span className='checkbox-text'>{name}</span>
            </label>
        </li>
    )
}

export default ProductCheckboxReturn