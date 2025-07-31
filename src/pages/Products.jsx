import React from 'react';
import { useLoaderData} from 'react-router';
import Product from '../components/Product';

const Products = () => {
    const productsData = useLoaderData();
    console.log(productsData)
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {
                productsData.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;