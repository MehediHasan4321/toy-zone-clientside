import React, { useEffect, useState } from 'react';
import CetegoryCart from './CetegoryCart';

const Categorys = () => {
    const [categorys,setCategorys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/banners')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-24'>
            {
                categorys.map(cate=><CetegoryCart key={cate._id} cate={cate}/>)
            }
        </div>
    );
};

export default Categorys;