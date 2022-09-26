import React from 'react'
import FadeOutIn from '../components/framer-motion/FadeOutIn'
import UserTable from '../components/user/user-table/UserTable'

// let user: any = {
//   // message: "User created successfully",
//   // sessionToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1MDQ2NzU1LCJleHAiOjE2NTUxMzMxNTV9.zJt2ie2wITgSbFb6FbYtTzyQ6W8MbE9meJ6mGavbUeA",
//   // user: {
//       id: 1,
//       username: "Della51",
//       firstName: "Sylvia",
//       lastName: "Robel",
//       email: "kozaklyho@gmail.com",
//       password: "$2a$13$ys7fzbIAG8fo1MkfbHEMuOX.pZ6p5WvIqI.SoffxQubH4qGUZWHG6",
//       updatedAt: "2022-06-12T15:12:35.145Z",
//       createdAt: "2022-06-12T15:12:35.145Z",
//       avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
//       address: {
//         country: 'Ukraine',
//         city: 'Kyiv',
//         post_office: 1
//       }
//   // }
// }
const User = () => {
  return (
    <>
    <FadeOutIn>
      <div style={{
        width: '1300px',
        margin: '50px auto',
        paddingBottom: '50px',  
      }}>
        <UserTable />
      </div> 
        </FadeOutIn>
    </>
  )
}

export default User