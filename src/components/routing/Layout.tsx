import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import Search from '../search/Search'

const Layout = () => {
    return (
        // <div className='aboba'>
        <>
            <Header />
            <Search />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
        // </div>
    )
}

export default Layout