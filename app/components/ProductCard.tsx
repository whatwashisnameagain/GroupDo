import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const AddToCart = () => {
    return (
        <div>
            <button className='btn btn-primary'>Add To Cart</button>
        </div>
    )
}

async function ProductCard() {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    , { cache: 'no-store'}); // always return fresh data or { next: { revalidate: 10 }}
    const users: User[] = await res.json();

    return (
        <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
            <h1>Users</h1>
            <p>{new Date().toLocaleDateString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
            <AddToCart/>
        </div>
    )
}

export default ProductCard