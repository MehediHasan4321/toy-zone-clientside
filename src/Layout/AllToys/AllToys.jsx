import React, { useEffect, useState } from 'react';
import Loading from '../ShareCompo/Loading/Loading';
import ToyCart from '../CategoryAllToy/ToyCart';


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentpage] = useState(0)
    const totalProduct = page;
    const productPerPage = 10;
    const totalPage = Math.ceil(totalProduct / productPerPage)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://my-toy-shop-server.vercel.app/allToy?page=${currentPage}&limit=${productPerPage}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
        .finally(()=>setIsLoading(false))
    }, [currentPage, totalPage])
    useEffect(() => {
        fetch('https://my-toy-shop-server.vercel.app/totalToy').then(res => res.json()).then(data => setPage(data.totalProduct))
    }, [])
    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <div className='container mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-24'>
                    {
                        toys?.map(toy => <ToyCart key={toy._id} toy={toy} />)
                    }
                </div>
                <div className='my-8 text-center'>
                    {
                        [...Array(totalPage).keys()].map(page => <button key={page} onClick={() => setCurrentpage(page )} className={currentPage === page  ? "bg-amber-400 px-4 py-2 mx-2 rounded-md font-semibold" : "bg-gray-100 px-4 py-2 mx-2 rounded-md font-semibold"}>{page+1}</button>)
                    }
                </div>
            </div>
        )
    }
};

export default AllToys;