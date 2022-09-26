import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LanguageIcon from '@mui/icons-material/Language';

import './HeaderIconLinks.scss'


import { Link } from 'react-router-dom';
import { ApiUrl } from '../../../../helpers/ApiUrl';
import { useAppSelector } from '../../../../redux/redux';

import CategoriesTriangle from '../../../../styled-component/CategoriesTriangle';
import MenuAccardion from '../../../../styled-component/MenuAccardion';
import UserMenu from '../user-menu/UserMenu'
import { motion } from 'framer-motion';

const HeaderIconLinks = () => {
    const avatar = useAppSelector(state => state.user.avatar)
    const cart = useAppSelector(state => state.cart.cart).length

    const [open, setOpen] = useState<boolean>(false)
    const [openLanguage, setOpenLanguage] = useState<boolean>(false)

    const [Avatar, setAvatar] = useState<any>(null)
    const [Cart, setCart] = useState<number>(0)

    useEffect(() => {
        setAvatar(avatar)
        setCart(cart)

    }, [cart, avatar])



    // let int = {
    //     opacity: 0,
    //     scale: 0,
    //     transition: {
    //         duration: 1
    //     }
    // }
    // let exit: any = {
    //     opacity: 0,
    //     transition: {
    //         duration: 1
    //     },
    //     // x: '-100%'
    //     scale: 0
    // }
    let ani = {
        // opacity: 1,
        scale: [1, 1.1, 1],
        transition: {
            duration: 0.6
        }
    }



    let st: any = {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        objectFit: 'cover'
    }

    const a =
        Avatar ? (
            <img src={`${ApiUrl}/${Avatar}`} style={{ ...st }}
                alt='s'
            />

        ) : (
            <span className='Header-menu-icons'>
                <AccountCircleIcon />
            </span>
        )


    return (
        <>
            <li className='HeaderMenu-list-item'
            >
                <LanguageIcon
                    className='Header-menu-icons'
                    style={{
                        cursor: 'pointer',
                        width: '30px',
                        height: '30px',
                    }}
                    onClick={() => setOpenLanguage(prev => !prev)}
                />
                <MenuAccardion
                    open={openLanguage}
                    position={'absolute'}
                >
                    <ul style={{
                        background: 'red',
                    }}
                        className='list-inner'
                    >
                        <li>
                            UA
                        </li>
                        <li>
                            EN
                        </li>
                    </ul>
                </MenuAccardion>
            </li>
            <li className='HeaderMenu-list-item'>
                <Link to={'/order'} className='Header-menu-icons'>
                    <ListAltIcon />
                </Link>
            </li>
            <li className='HeaderMenu-list-item'
                style={{
                    position: 'relative'
                }}
            >
                <Link to={'/cart'} className='Header-menu-icons'>
                    {Cart > 0 && (
                        <motion.div
                            // key={cart}
                            // initial={int}
                            // exit={exit}
                            animate={ani}
                            style={{
                                width: '25px',
                                height: '25px',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                background: 'red',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                color: 'black'
                            }}>
                            <p style={{
                                alignSelf: 'center',
                                fontSize: '0.9rem',
                                fontWeight: 500
                            }}>
                                {Cart}
                            </p>
                        </motion.div>
                    )}
                    <ShoppingCartIcon />
                </Link>
            </li >
            <li
                className='HeaderMenu-list-item'
                onClick={() => setOpen(prev => !prev)}
            >
                <div style={{ display: 'flex' }}
                    className='abi'
                >
                    {a}
                    {/* <CategoriesTriangle open={open} color={'#ededed'} className='Header-menu-icons-hover'> */}
                    <CategoriesTriangle open={open} color={'#232323'} className='Header-menu-icons-hover'>
                        <ExpandMoreIcon />
                    </CategoriesTriangle>
                </div>
                <MenuAccardion open={open} position={'absolute'} marginTop={5}>
                    <UserMenu />
                </MenuAccardion>
            </li>
        </>
    )
}


export default HeaderIconLinks