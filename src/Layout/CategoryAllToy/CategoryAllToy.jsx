import { useLoaderData } from 'react-router-dom';
import ToyCart from './ToyCart';
import { useEffect, useState } from 'react';

const CategoryAllToy = () => {
    const toys = useLoaderData()
    const subCataBtn = ["Action", "Villain", "Other"]
    const [subCategory, setSubCategory] = useState('Action')
    const [showtoy, setShowToy] = useState(toys)
    
    useEffect(() => {
        const filtertoy = toys.filter(toy => toy.subCategory === subCategory)
        
        if (filtertoy) {
            setShowToy(filtertoy)
        } else {
            setShowToy(toys)
        }

    }, [subCategory])
    return (
        <div className='container mx-auto'>
            <div>
                {
                    subCataBtn?.map(btn => <button onClick={() => setSubCategory(btn)} key={btn} className={subCategory === btn ? "w-1/3 bg-amber-400 py-2 font-semibold border-[1px]" : "w-1/3 py-2 font-semibold border-[1px]"}>{btn} Toy</button>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-24'>
                {
                    showtoy?.map(toy => <ToyCart key={toy._id} toy={toy} />)
                }
            </div>
        </div>
    );
};

export default CategoryAllToy;