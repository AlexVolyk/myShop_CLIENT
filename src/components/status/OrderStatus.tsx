import React from 'react'

const OrderStatus = ({ status }: any) => {

    let bg_c = 'blue';
    let b_c = 'blue';

    switch (status) {
        case 'going':
            bg_c = '#EDE04D'
            b_c = '#ff7200'

            break;
        case 'arrived':
            bg_c = 'green'
            b_c = 'red'
            break;
        case 'depreceted':
            bg_c = 'red'
            b_c = 'green'
            break;
        default:
            break;
    }


    return (
        <div
            className='OrderTable-status'
            style={{ backgroundColor: bg_c, border: `2px solid ${b_c}`, width: 'fit-content' }}>
                <p>
                    {status}
                </p>
        </div>
    )
}

export default OrderStatus