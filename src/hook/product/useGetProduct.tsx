import { useQuery } from 'react-query';
import { getProduct } from '../../api/ProductApi';
const useGetProduct = (id: number) => {
    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        [
            'useGetProduct',
            id
        ],
        () => getProduct(id),
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

export default useGetProduct