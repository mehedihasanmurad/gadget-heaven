import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Product from '../components/Product';

const Products = () => {
    const productsData = useLoaderData();
    const params = useParams();
    console.log(params)

    // const filtered = category ? allData.filter(p => p.category === category) : allData; 
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {
                productsData.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;