import React, { useContext, useEffect, useState } from 'react';
import CetegoryCart from './CetegoryCart';

import { AuthContext } from '../../AuthProvider/AuthProvider';

const Categorys = () => {
    const {banners} = useContext(AuthContext)
   
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-24'>
            
            {
                banners.map(cate=><CetegoryCart key={cate._id} cate={cate}/>)
            }
        </div>
    );
};

export default Categorys;