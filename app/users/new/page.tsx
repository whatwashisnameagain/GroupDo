'use client';
import React from 'react'
import { useRouter } from 'next/navigation';


const NewUser = () => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push('/users')
    }

    return (
        <button
            onClick={handleClick}
            className="btn btn-primary"> Create</button>
    )
}

export default NewUser