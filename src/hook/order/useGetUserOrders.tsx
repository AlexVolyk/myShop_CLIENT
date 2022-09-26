import { useQuery } from 'react-query';
import { getUserOrders } from '../../api/OrderApi';
const useGetUserOrders = (token: any) => {
    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        [
            'useGetUserOrders',
            token
        ],
        () => getUserOrders(token),
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

export default useGetUserOrders