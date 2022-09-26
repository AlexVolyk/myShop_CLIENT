import React from 'react'
import { footer_icon_links } from '../../../assets/data/footer_icon_links'


const FooterIconLinks = () => {
    return (
        <>
            {footer_icon_links.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <li className={`${item.className} Footer-icons`}>
                            <a href={`/${item.path}`} target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        </li>
                    </React.Fragment>
                )
            }
            )}
        </>
    )
}

export default FooterIconLinks