import React, { useContext } from 'react';
import CetegoryCart from './CetegoryCart';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../ShareCompo/Loading/Loading';

const Categorys = () => {
    const {banners} = useContext(AuthContext)
   
    if(banners){
        return (
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-24'>
                
                {
                    banners.map(cate=><CetegoryCart key={cate._id} cate={cate}/>)
                }
            </div>
        );
    }else{
        return <Loading/>
    }
};

export default Categorys;