import { useLoaderData } from 'react-router-dom';
import ToyCart from './ToyCart';

const CategoryAllToy = () => {
    const toys = useLoaderData()
    return (
        <div className='container mx-auto'>
            <h1>Total Toy Find {toys.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    toys.map(toy=><ToyCart key={toy._id} toy={toy}/>)
                }
            </div>
        </div>
    );
};

export default CategoryAllToy;