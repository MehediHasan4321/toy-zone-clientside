import React, { useEffect, useState } from 'react';
import Loading from '../ShareCompo/Loading/Loading';
import ToyCart from '../CategoryAllToy/ToyCart';

const AllToys = () => {
    const [toys,setToys] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://my-toy-shop-server.vercel.app/allToy')
        .then(res=>res.json())
        .then(data=>setToys(data))
        .finally(()=>setIsLoading(false))
    },[])
    if(isLoading){
        return <Loading/>
    }
    else{
        return(
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-24'>
                {
                    toys.map(toy=><ToyCart key={toy._id} toy={toy}/>)
                }
            </div>
        )
    }
};

export default AllToys;