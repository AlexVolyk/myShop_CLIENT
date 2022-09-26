import { useQuery } from 'react-query'
import { getAllUsers } from '../../api/UserApi'

const useGetAllUsers = (token: any) => {

    const {
        isLoading,
        error,
        data,
        refetch
    } = useQuery([
        'useGetAllUsers',
        token
    ],
        () => getAllUsers(token),
        {
            refetchOnWindowFocus: false,
        }
    )

    return {
        isLoading,
        error,
        data,
        refetch
    }

}



export default useGetAllUsers