import React from 'react'

interface Props {
    params: {
        id: number
    }
}

const ProductPage = ({ params: { id}}: Props) => {
    return (
        <main>
            <div>
                <p> Product is {id}</p>
            </div>
        </main>
    )
}

export default ProductPage;