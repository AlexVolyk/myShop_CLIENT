import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrder } from '../../api/OrderApi';
import { useAppDispatch } from '../../redux/redux';
import { cartReset } from '../../redux/slices/cartSlice';

const useCreateOrder = ({ token }: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        isLoading,
        mutateAsync
    } = useMutation('cart buy',
        (values) => createOrder({
            values,
            token
        })
        ,
        {
            onSuccess: (data, variables, context) => {
                dispatch(cartReset())

                toast.success('🦄' + data.message)
                navigate('/order')
            },
            onError: (error: any, variables, context) => {
                toast.error(error.response.data.message);

            }
            // { enabled: true }
        }

    );


    return {
        isLoading,
        mutateAsync
    }
}

export default useCreateOrder