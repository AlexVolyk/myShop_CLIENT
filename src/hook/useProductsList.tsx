import { useQuery } from 'react-query';
import { getProductsList } from '../api/ProductsApi';
const useProductsList = ({
    filter,
    minimumCurrentPrice,
    maximumCurrentPrice,
    currentPage
}: any) => {
    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        [
            'useProductsList',
            filter,
            minimumCurrentPrice,
            maximumCurrentPrice,
            currentPage
        ],
        () => getProductsList({
            filter,
            minimumCurrentPrice,
            maximumCurrentPrice,
            currentPage
        }),
        {
            // enabled: false,
            refetchOnWindowFocus: false,
            // keepPreviousData: true
        }
    );


    return {
        isLoading,
        error,
        data,
        refetch
    }
}

export default useProductsList