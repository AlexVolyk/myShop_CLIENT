import { useQuery } from 'react-query';
import { getUserUser } from '../../api/UserApi';
const useGetUserUser = (token: any) => {
    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery(
        [
            'useGetUserUser',
            token
        ],
        () => getUserUser(token),
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

export default useGetUserUser