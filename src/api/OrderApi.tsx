import axios from 'axios';
import { ApiUrl, axiosSetup } from '../helpers/ApiUrl';


async function getUserOrders(token: string) {
    // let data = await values

    return await axiosSetup.get('/order/user/orders',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

    )
        .then(res => res.data)
}

async function createOrder({ values, token }: any) {
    let data = await values

    return await axiosSetup.post('/order/create',
        data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    )
        .then(res => res.data)
}


export {
    createOrder,
    getUserOrders
}