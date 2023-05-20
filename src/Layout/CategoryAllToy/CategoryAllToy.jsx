import { useLoaderData } from 'react-router-dom';
import ToyCart from './ToyCart';
import { useState } from 'react';

const CategoryAllToy = () => {
    const toys = useLoaderData()
    const subCataBtn = ["Action Toy","Villain Toy","Other Toy"]
    const [subCategory,setSubCategory] = useState('')
   
    return (
        <div className='container mx-auto'>
            <div>
                {
                    subCataBtn?.map(btn=><button onClick={()=>setSubCategory(btn)} key={btn} className={subCategory === btn ? "w-1/3 bg-amber-400 py-2 font-semibold border-[1px]":"w-1/3 py-2 font-semibold border-[1px]"}>{btn}</button>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-24'>
                {
                    toys?.map(toy=><ToyCart key={toy._id} toy={toy}/>)
                }
            </div>
        </div>
    );
};

export default CategoryAllToy;