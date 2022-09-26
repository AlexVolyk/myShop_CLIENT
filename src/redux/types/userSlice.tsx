type isExist = string | null | void

export type userSliceType = {
    avatar: isExist,
    username: isExist,
    firstName: isExist,
    lastName: isExist,
    email: isExist,
    country: isExist,
    city: isExist,
    post_office: isExist,
    isAdmin: boolean | null,
    userToken: isExist
    // passw: isExist,


    // status: isExist,
    // error: isExist
}
