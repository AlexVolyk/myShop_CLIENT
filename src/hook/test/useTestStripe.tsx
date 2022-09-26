import { useQuery } from 'react-query';
import { TestGET } from '../../api/TestApi';
const useTestStripe = () => {
    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        [
            'useTestStripe',
        ],
        () => TestGET(),
        {
            enabled: false,
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

export default useTestStripe