import React from 'react'
import Link from 'next/link'

const Products = () => {
    return (
        <div>
            <h1>GroupDo</h1>
            <Link href="products">Products</Link>
            <Link href="users">Users</Link>
        </div>
    )
}

export default Products;