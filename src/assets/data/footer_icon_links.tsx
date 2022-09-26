import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


export const footer_icon_links: {icon: React.ReactElement, path: string, className: string}[] = [
    {
        icon: <InstagramIcon />,
        path: '#',
        className: 'Footer-instagram'
    },
    {
        icon: <FacebookIcon />,
        path: '#',
        className: 'Footer-facebook'

    },
    {
        icon: <TwitterIcon />,
        path: '#',
        className: 'Footer-twitter'

    },
    {
        icon: <TelegramIcon />,
        path: '#',
        className: 'Footer-telegram'

    },
]