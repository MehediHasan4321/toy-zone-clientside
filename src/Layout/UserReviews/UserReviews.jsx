import React, { useEffect, useState } from 'react';
import UserReviewCart from './UserReviewCart';

const UserReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://my-toy-shop-server.vercel.app/userReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-4xl font-semibold text-center my-12'>Our Customer Reviews</h1>
            <div className='flex flex-wrap mt-24'>
                {
                    reviews?.map(review=><UserReviewCart key={review.img} review={review}/>)
                }
            </div>
        </div>
    );
};

export default UserReviews;