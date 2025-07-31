import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleCategories from '../components/SingleCategories';
import NoDataImg from '../assets/NoData.jpg';

const CommonCategories = () => {
    const {category} = useParams();
    const categoriesData = useLoaderData();
    // console.log(params, categoriesData)
    const allCategories = categoriesData.filter(categories => categories.category.toLowerCase() === category.toLowerCase());
    // console.log(allCategories)
    if (allCategories.length === 0) {
        return <div className='border border-slate-200 rounded-lg p-6 space-y-5 mx-5'>
            <img className='w-[400px] rounded-2xl' src={NoDataImg} alt="" />
            <p className='text-xl md:text-3xl font-bold'>No Data Available</p>
            <p>So Sorry!!!!!!!!!!!!!</p>
        </div>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                allCategories.map(category => <SingleCategories key={category.product_id} category={category}></SingleCategories>)
           }
        </div>
    );
};

export default CommonCategories;