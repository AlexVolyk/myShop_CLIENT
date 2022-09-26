import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './Layout'
import { Route, Routes, useLocation } from 'react-router-dom'

import ProductsList from '../../screen/ProductsList';
import NotFound from '../../screen/NotFound';
import User from '../../screen/User';
import Order from '../../screen/Order';
import Cart from '../../screen/Cart';
import Product from '../../screen/Product';
import Auth from '../../screen/Auth';
import IsUserLogin from '../isUserLogin/IsUserLogin';
import Testing from '../../Testing';
import IsAdminLogin from '../isAdminLogin/IsAdminLogin';
import AllOrders from '../../screen/AllOrders';
import AllUsers from '../../screen/AllUsers';
import AdminAuth from '../admin-auth/AdminAuthTable';
import IsSuperAdmin from '../isSuperAdmin/IsSuperAdmin';
import CreateProduct from '../create-product/CreateProduct';
import CreateCategory from '../create-category/CreateCategory';



const Navigate = () => {
    let location = useLocation()
    return (
        <>
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ProductsList />} />
                    <Route path='page/:pageNumber' element={<ProductsList />} />
                    <Route path='products/page/:pageNumber' element={<ProductsList />} />

                    <Route path='products/search' element={<ProductsList />} />
                    <Route path='products/search/page/:pageNumber' element={<ProductsList />} />



                    <Route path='categorie/electronic' element={<ProductsList />} />
                    <Route path='categorie/food' element={<ProductsList />} />
                    <Route path='categorie/decoration' element={<ProductsList />} />
                    <Route path='categorie/home' element={<ProductsList />} />
                    <Route path='testing' element={<Testing />} />



                    <Route path='product/:productName/:id' element={<Product />} />

                    <Route element={<IsUserLogin />}>
                        <Route path='user' element={<User />} />
                        <Route path='order' element={<Order />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='success' element={<h1>SUCCESSFULLY</h1>} />

                    </Route>


                    <Route path='register' element={<Auth />} />
                    <Route path='login' element={<Auth />} />

                    <Route path='admin/login' element={<AdminAuth />} />
                    <Route path='admin/register' element={<IsSuperAdmin />}>
                        <Route index element={<AdminAuth />} />

                    </Route>



                    <Route path='*' element={<NotFound />} />


                </Route>
                    <Route path='admin' element={<IsAdminLogin />}>
                    <Route index element={<AllOrders />}/>

                        <Route path='orders' element={<AllOrders />}/>
                        <Route path='users' element={<AllUsers />}/>
                        <Route path='product/create' element={<CreateProduct />}/>
                        <Route path='product/create/category' element={<CreateCategory />}/>


                        {/* <Route path='orders' element={}/> */}

                        {/* <Route path='user' element={<User />} />
                        <Route path='order' element={<Order />} />
                        <Route path='cart' element={<Cart />} /> */}
                    </Route>
            </Routes>
        </AnimatePresence>
        </>
    )
}

export default Navigate