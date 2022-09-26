import { useQuery } from 'react-query';
import { getProductsSearch } from '../api/ProductsApi';

type useProductsSearchType = {
    search: any,
    currentPage: number
}
const useProductsSearch = ({
    search: name,
    currentPage
}: useProductsSearchType) => {
    const {
        isLoading,
        error,
        data,
        refetch,
        isError
    } = useQuery(
        [
            'useProductsSearch',
            name,
            currentPage
        ],
        () => getProductsSearch({
            name,
            currentPage
        }),
        {
            enabled: false,
            refetchOnWindowFocus: false,
        }
    );

    console.log(error, 'dasdahsdfhjghjdsfhjg187e76');



    return {
        isLoading,
        error,
        data,
        refetch,
        isError
    }
}

export default useProductsSearch