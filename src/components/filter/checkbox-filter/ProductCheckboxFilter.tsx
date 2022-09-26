import React from 'react'
import ProductCheckboxReturn from './checkbox-return/ProductCheckboxReturn'
import { useAppSelector } from '../../../redux/redux'


const ProductCheckboxFilter = () => {
    const filte = useAppSelector(state => state.filter.filter)

    let cat = ['home', 'food', 'electronic', 'decoration']

    return (
        <>
            {
                cat.map((c: any, index: any) => {
                    let name = c
                    name = name[0].slice(0, 1).toUpperCase() + name.slice(1,)
                    let checkboxBoolean = filte.includes(c)

                    return (
                        <React.Fragment key={index}>
                            <ProductCheckboxReturn value={c} name={name} checkboxBoolean={checkboxBoolean} />
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default ProductCheckboxFilter