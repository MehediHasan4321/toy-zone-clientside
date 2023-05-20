import React, { useEffect, useState } from 'react';
import ImgGallaryCart from './ImgGallaryCart';

const ImgGallary = () => {
    const [imgs,setImg] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/imgGallary')
        .then(res=>res.json())
        .then(data=>setImg(data))
    },[])
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-center text-4xl font-semibold'>Our Images Gallary</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-24'>
                {
                    imgs?.map(img=><ImgGallaryCart key={img.img} img={img}/>)
                }
            </div>
        </div>
    );
};

export default ImgGallary;