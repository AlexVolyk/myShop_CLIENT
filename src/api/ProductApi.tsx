import { axiosSetup } from '../helpers/ApiUrl';

// type getProductType = {
//     id: number
// }

// ${ApiUrl}/product/${param.id}

async function getProduct(id: number) {
    return axiosSetup.get('/product/' + id)
        .then(res => res.data)

}


async function createProduct(values: any, token: string | null) {
    return axiosSetup.post('/product/create',
        values,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)

}


export {
    getProduct,
    createProduct
}