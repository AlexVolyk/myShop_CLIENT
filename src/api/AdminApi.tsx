import { axiosSetup } from '../helpers/ApiUrl';


async function getUsers(token: string) {

    return await axiosSetup.get('/user/users',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
        .then(res => res.data)
}

// async function createOrder({ values, token }: any) {
//     let data = await values

//     return await axiosSetup.post('/order/create',
//         data, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }

//     )
//         .then(res => res.data)
// }


export {
    getUsers,
    // getUserOrders
}