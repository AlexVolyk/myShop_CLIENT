import { axiosSetup } from '../helpers/ApiUrl';

type getProductsListType = {
    filter: string[],
    minimumCurrentPrice: number,
    maximumCurrentPrice: number,
    currentPage: number
}


async function getProductsList({ filter: type, minimumCurrentPrice: min, maximumCurrentPrice: max, currentPage }: getProductsListType) {
    let params: any = await { params: {} }

    params = await getProductsListParams({ params, type, min, max, currentPage })

    return axiosSetup.get('/product/products', params)
        .then(res => res.data)

}

type aboba = {
    name: string,
    currentPage: number
}

async function getProductsSearch({ name, currentPage: searchPage }: aboba) {

    let params: any = await { params: {} }

    params = await getProductsSearchParams({ params , name, searchPage })

    return await axiosSetup.get('/product/products/search', params)
        .then(res => res.data)

}



async function getProductsListParams({ params, type, min, max, currentPage }: any) {
    params.params.currentPage = await currentPage

    if (type !== undefined) {
        console.log('here', type);
        
        if (type.length) {
            params.params.type = await type

        }
    }

    if (min) {
        params.params.min = await min
    }

    if (max) {
        params.params.max = await max
    }

    return params
}

async function getProductsSearchParams({ params, name, searchPage }: any) {
    params.params.product_name = await name
    params.params.searchPage = await searchPage

    return await params
}

export {
    getProductsList,
    getProductsSearch
}