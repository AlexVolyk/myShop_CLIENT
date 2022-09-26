import React from 'react'
import './AllOrdersTable.scss'

const AllOrdersTable = () => {
    return (
        <div className='AllOrdersTable'>
            <p>
                AllOrdersTable
                </p>
            <table>
                <tr>
                    <th>
                        Order Id
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        order price
                    </th>
                    <th>
                        order status
                    </th>
                    <th>
                        change status
                    </th>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        1example@gmail.com
                    </td>
                    <td>
                        $23.22
                    </td>
                    <td>
                        going
                    </td>
                    <td>
                        <button>
                            preparing
                        </button>
                        <button>
                            going
                        </button>
                        <button>
                            arrived
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AllOrdersTable