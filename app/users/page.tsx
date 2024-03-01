import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

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
            <Link href="/users/new" className="btn">New User</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder}/>
            </Suspense>
        </div>
    )
}

export default Users;