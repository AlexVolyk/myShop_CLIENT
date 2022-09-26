import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.scss'
import logo from '../../assets/img/Logo.svg'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HeaderMenu from './header-menu/HeaderMenu';
import CategoriesTriangle from '../../styled-component/CategoriesTriangle';
import MenuAccardion from '../../styled-component/MenuAccardion';

import HeaderIconLinks from './header-menu/header_icon_links/HeaderIconLinks';


const Header: React.FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <div className='Header-wrapper'>
                <Link to='/' style={{ zIndex: 100 }}>
                    <div>
                        <img src={logo} style={{ display: 'block' }} alt='Logo' />
                    </div>
                </Link>
                <div className='Header-right'>
                    <ul className='Header-menu'>
                        <li className='Header-menu-categories-inner'>
                            <div style={{ position: 'relative', marginRight: '30px' }}>
                                <button className='Header-menu-categories-btn'
                                    onClick={() => setOpen(prev => !prev)
                                    }>
                                    Categories
                                    <CategoriesTriangle open={open} color={'#ededed'}>
                                        <ExpandMoreIcon />
                                    </CategoriesTriangle>
                                </button>
                                <MenuAccardion open={open} position={'absolute'} right={true}>
                                    <HeaderMenu />
                                </MenuAccardion>
                            </div>
                        </li>
                        {/* <li className='Header-menu-categories-inner'>
                            <Link to={'product/search?what=justSay'}>
                                Search Result
                            </Link>
                        </li> */}
                        <HeaderIconLinks />
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header