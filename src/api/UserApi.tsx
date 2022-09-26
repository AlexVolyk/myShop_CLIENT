import { axiosSetup } from '../helpers/ApiUrl';

async function loginUser(values: any) {
    return await axiosSetup.post('/user/login', values)
        .then(res => res.data)
}

async function registerUser(values: any) {
    return await axiosSetup.post('/user/register', values)
        .then(res => res.data)
}

async function getUserUser(token: string) {
    return await axiosSetup.get('/user/user',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)
}

async function updateUserUser({ token, values: data }: any) {
    return await axiosSetup.put('/user/update',
        data,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)
}

async function deleteUserUser({ token, values: data }: any) {
    return await axiosSetup.delete('/user/delete',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)
}


async function getAllUsers(token: string) {
    return await axiosSetup.get('/user/users',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)
}


export {
    loginUser,
    registerUser,
    getUserUser,
    updateUserUser,
    deleteUserUser,
    getAllUsers
}