import { axiosSetup } from '../helpers/ApiUrl';



async function TestGET() {
    return axiosSetup.get('/order/create-checkout-session')
        .then(res => res.data)

}



export {
    TestGET,
}