import React from 'react'
import UserTable from './UserTable.jsx'

const Users = async () =>  {

    return (
        <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
            <h1>Users</h1>
            <p>{new Date().toLocaleDateString()}</p>
            <UserTable/>
        </div>
    )
}

export default Users;