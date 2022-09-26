import axios from "axios"
// import { useAppSelector } from "../redux/redux"

export const ApiUrl = 'http://localhost:3000'
export const axiosSetup = axios.create({
    baseURL: ApiUrl
})


//! THERE WAS EXPORTED STRIPE KEY

// export const Ax = () => {
//     const userToken = useAppSelector(state => state.user.userToken)
//     let axi = axios.create({
//         baseURL: ApiUrl,
//     })
//     axi.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
//     return axi
// }
