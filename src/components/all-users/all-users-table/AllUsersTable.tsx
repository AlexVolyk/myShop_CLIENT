import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useGetAllUsers from '../../../hook/user/useGetAllUsers';
import { useAppSelector } from '../../../redux/redux';
import aboba from '../../../assets/img/aboba.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const AllUsersTable = () => {
    const adminToken = useAppSelector(state => state.admin.adminToken)
    // const da = useAppSelector(state => state.admin)

    // console.log(da,'da');

    const { data } = useGetAllUsers(adminToken)
    console.log(data);

    // console.log(data.users,'data');
    // const d = data?.users
    // console.log(d,'d');
    const objectParameters = {
        width: 40,
        height: 40
    }



    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: 'User Avatar',
            width: 150,
            sortable: false,
            editable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <div style={{
                        display: 'flex',
                        borderRadius: '50%',
                        overflow: 'hidden'
                    }}>
                        {
                            params.row.avatar ? (
                                <img src={params.row.avatar} style={objectParameters} />
                            ) : (
                                <AccountCircleIcon style={objectParameters} />
                            )
                        }
                    </div>
                )
            }
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
            sortable: false,
            editable: false,
            disableColumnMenu: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            sortable: false,
            editable: false,
            disableColumnMenu: true,
        },
        {
            field: 'total_spend',
            headerName: 'Total spend',
            type: 'number',
            width: 200,
            sortable: false,
            editable: false,
            disableColumnMenu: true,
            align: 'left',
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
        { id: 4, lastName: 'Stark', firstName: 'Arya' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
        { id: 6, lastName: 'Melisandre', firstName: null },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey' },
        { id: 11, lastName: 'Roxie', firstName: 'Harvey' },
    ];

    // let row = data?.users.length ? data.users : rows
    let row = rows

    return (
        <>
            <div className='aaaa' style={{
                width: '1050px',
                height: '90%',
                margin: '0 auto',
                marginTop: '40px'
            }}>
                <DataGrid
                    // rows={rows}
                    rows={row}
                    // rows={data?.users ? data.users : rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </>
    )
}

export default AllUsersTable