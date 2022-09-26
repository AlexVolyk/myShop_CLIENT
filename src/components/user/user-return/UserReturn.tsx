import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { ApiUrl } from '../../../helpers/ApiUrl'
import useUpdateUserUser from '../../../hook/user/useUpdateUserUser'

import { useInput } from '../../../hooks/useInput'
import { useAppSelector } from '../../../redux/redux'

import Swal from 'sweetalert2'
import useDeleteUserUser from '../../../hook/user/useDeleteUserUser'


const UserReturn = ({ user }: any) => {
    const { avatar,
        username,
        firstName,
        lastName,
        email,
        country,
        city,
        post_office,
        userToken
    } = useAppSelector(state => state.user)

    const [newAvatar, setNewAvatar] = useState(null)
    const [futureAvatar, setFutureAvatar] = useState(null)

    const { isLoading: isLoadingUpdate, mutateAsync: mutateAsyncUpdate } = useUpdateUserUser(userToken)
    const { isLoading: isLoadingDelete, mutateAsync: mutateAsyncDelete } = useDeleteUserUser(userToken)


    let Avatar = useInput(avatar)
    let Username = useInput(username)
    let LastName = useInput(lastName)
    let FirstName = useInput(firstName)
    let Email = useInput(email)
    let Country = useInput(country)
    let City = useInput(city)
    let Post_office = useInput(post_office)

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })



    console.log('user-----------', user);

    let d = async () => {
        let formData: any = await new FormData()
        let data = await {
            avatar: futureAvatar ? futureAvatar : Avatar.value,
            username: Username.value,
            lastName: LastName.value,
            firstName: FirstName.value,
            email: Email.value,
            country: Country.value,
            city: City.value,
            post_office: Post_office.value,
        }
        if (data.avatar !== Avatar.value) {
            await formData.append('img', data.avatar)

        }
        await formData.append('username', data.username)
        await formData.append('firstName', data.firstName)
        await formData.append('lastName', data.lastName)
        await formData.append('email', data.email)
        // await formData.append('password', data.avatar)
        await formData.append('country', data.country)
        await formData.append('city', data.city)
        await formData.append('post_office', data.post_office)
        await console.log(formData, 'formData');


        return await formData
    }

    async function updateUser() {
        let values = await d()
        mutateAsyncUpdate(values)

    }

    async function deleteUser() {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // swalWithBootstrapButtons.fire(
                //     'Deleted!',
                //     'Your account has been deleted.',
                //     'success'
                // )
                mutateAsyncDelete()
            } else if (
                result.dismiss === Swal.DismissReason.cancel

            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your account is prevented from delete :)',
                    'error'
                )
            }
        })
    }

    function previewImg(e: any) {
        let a = e.target.files[0];
        setFutureAvatar(a)

        a = URL.createObjectURL(a)
        Avatar.change(a, true)

    }




    return (
        <>
            <div className='UserTable-avatar-inner'>
                <img src={Avatar.value ? (
                    !Avatar.value.includes('localhost') ? ApiUrl + '/' + Avatar.value : Avatar.value
                ) : (
                    'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
                )
                } alt="aasassaassa" className='UserTable-avatar' />
                <input
                    type="file"
                    accept='image/*'
                    onChange={previewImg}
                />
            </div>
            <div className='UserTable-user_info-inner'>
                <div className='UserTable-user_info'>
                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>Username:</label>
                        <input
                            value={Username.value}
                            onChange={Username.change}
                        />
                    </div>

                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>First Name:</label>
                        <input
                            value={FirstName.value}
                            onChange={FirstName.change}
                        />
                    </div>

                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>Last Name:</label>
                        <input
                            value={LastName.value}
                            onChange={LastName.change}
                        />
                    </div>

                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>Email:</label>
                        <input
                            value={Email.value}
                            onChange={Email.change}
                        />
                    </div>
                </div>
                <div className='UserTable-address'>
                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>Country:</label>
                        <input
                            value={Country.value}
                            onChange={Country.change}
                        />
                    </div>

                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>City:</label>
                        <input
                            value={City.value}
                            onChange={City.change}
                        />
                    </div>

                    <div className='UserTable-fields-inner'>
                        <label className='UserTable-info_label'>Post Office:</label>
                        <input
                            value={Post_office.value}
                            onChange={Post_office.change}
                        />
                    </div>
                </div>
            </div>
            <div className='UserTable-inner-btn'>
                <button
                    className='update'
                // onClick={updateUser}
                >
                    Update
                </button>
                <button
                    className='delete'
                // onClick={deleteUser}
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default UserReturn