import React from 'react'
import './footer.scss'
import FooterIconLinks from './footer_icon_links/FooterIconLinks';

const Footer = () => {
    return (
        <footer>
            <div className='Footer-wrapper'>
                <div className='Footer-top'>
                    <div className='Footer-top-left'>
                        <div className='Footer-social_networks'>
                            <p className='Footer-titles'>Social Neworks</p>
                            <ul className='Footer-social_networks-list'>
                                <FooterIconLinks />
                            </ul>
                        </div>
                    </div>
                    <div className='Footer-top-right'>
                        <div className='Footer-contacts'>
                            <p className='Footer-titles'>Contact</p>
                            <div className='Footer-contact_data-block'>
                            <p className='Footer-contact_data'>+000 00 0000 00</p>
                            <p className='Footer-contact_data'>+010 10 0101 01</p>
                            <p className='Footer-contact_data'>exaple@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='Footer-bottom'>Copyright by Alex Volyk 2022</p>
            </div>
        </footer>
    )
}

export default Footer