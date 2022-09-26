import React from 'react'
import { Link } from 'react-router-dom'
import './headermenu.scss'

import { categories } from './categories/categories'

const HeaderMenu = () => {
    return (
        <div className='HeaderMenu'>
            <ul className='HeaderMenu-list' style={{display: 'flex'}}>
                {categories.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <li className='HeaderMenu-list-item'>
                                <Link to={`/categorie/${item.path}`} className='HeaderMenu-list-link'>
                                    {item.categorie}
                                </Link>
                            </li>
                        </React.Fragment>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default HeaderMenu