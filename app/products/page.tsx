import React from 'react'
import Link from 'next/link'

const Products = () => {
    return (
        <div>
            <p>All Products</p>
            <Link href="products/1">Product 1</Link>
        </div>
    )
}

export default Products;