import React from 'react'
import UserTable from './UserTable.tsx'

interface Props {
    searchParams: {
        sortOrder: string
    }
}

const Users = async ({
    searchParams: {
        sortOrder
    }
} :  Props ) =>  {

    console.log("sortOrder: ", sortOrder);

    return (
        <div className="p-5 my-5 text-white text-xl">
            <p>{new Date().toLocaleDateString()}</p>
            <h1>Users</h1>
            <UserTable/>
        </div>
    )
}

export default Users;