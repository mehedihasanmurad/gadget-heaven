import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { product_image, product_title, price } = product;
    return (
        <div className="card border lg:w-[310px] mx-5 border-slate-200 shadow-sm">
            <figure className=''>
                <img className='h-62 w-full pt-4 px-4 pb-1 rounded-3xl'
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="px-4">
                <h2 className="card-title text-xl mt-3">{product_title}</h2>
                <p className='mt-2 text-md'>Price : {price}k</p>
                <div className="card-actions justify-start">
                    <Link href="#_" className="px-7 py-2.5 relative rounded-full my-5 w-38 group overflow-hidden font-medium bg-white border text-purple-600 inline-block">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#9538E2] group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-white">View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;