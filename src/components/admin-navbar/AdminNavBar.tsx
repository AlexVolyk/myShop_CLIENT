import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo.svg'

const AdminNavBar = () => {
    return (
        <div style={{
            padding: '10px 0',
            flex: 1.5,
            background: 'red',

        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>

                <Link to='/' style={{ zIndex: 100 }}>
                    <div>
                        <img src={logo} style={{ display: 'block' }} alt='Logo' />
                    </div>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to={'orders'}>
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to={'users'}>
                        Users
                    </Link>
                </li>
                <li>
                    <Link to={'product/create'}>
                        Create product
                    </Link>
                </li>
                <li>
                    <Link to={'product/create/category'}>
                        Create category
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminNavBar