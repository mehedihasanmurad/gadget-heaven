import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ViewDetails = () => {
    const { product_id } = useParams();
    const viewData = useLoaderData();
    // console.log(typeof product_id,typeof viewData[0].product_id)
    const detailsData = viewData.find(data => data.product_id === parseInt(product_id));
    const { product_image, product_title, price, description, specification, availability, rating } = detailsData;
    return (
        <div className=" max-w-6xl mx-auto border p-4 border-slate-300 rounded-lg my-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <img
                    src={product_image}
                    className=" w-96 h-96 object-center rounded-lg shadow-2xl border p-3 border-slate-100"
                />
                <div className='space-y-3'>
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p>Price : ${price}</p>
                    {
                        availability && <button className='border px-4 rounded-full border-green-400 bg-green-50 text-green-400'>In Stock</button>
                    }
                    <p className="">
                        {description}
                    </p>
                    <h3><span className='font-bold'>Specification</span> : 
                        {
                            specification.map((special, index) => <div>{index+1}. {special}</div>)
                        }
                    </h3>
                    <div> 
                        <h3 className='font-bold'>Rating :</h3>
                        <div className='flex gap-5 my-2'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask text-sm mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className='flex mt-5 items-center gap-3'>
                        <div className='flex border items-center gap-2 rounded-full bg-[#9538E2] text-white hover:bg-black py-2 px-5'>
                            <button className="">Add to Cart </button>
                            <IoCartOutline className='text-xl'></IoCartOutline>
                        </div>
                        <div className='border border-slate-200  p-2 rounded-full hover:bg-red-500'>
                            <IoIosHeartEmpty className='text-xl'></IoIosHeartEmpty>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;