import React, { useEffect, useState } from 'react';
import Loading from '../ShareCompo/Loading/Loading';
import { Link } from 'react-router-dom';
import useTitle from '../../CustomLoader/UseTitle';



const AllToys = () => {
    const [toys, setToys] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentpage] = useState(0)
    const totalProduct = page;
    const productPerPage = 20;
    const totalPage = Math.ceil(totalProduct / productPerPage)
    const [searchText, setSearchText] = useState('')
    useTitle('All Toys')
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://toyshop-zeta.vercel.app/allToy?page=${currentPage}&limit=${productPerPage}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(() => setIsLoading(false))
    }, [currentPage, totalPage])
    useEffect(() => {
        fetch('https://toyshop-zeta.vercel.app/totalToy').then(res => res.json()).then(data => setPage(data.totalProduct))
    }, [])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://toyshop-zeta.vercel.app/searchToy/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(()=>setIsLoading(false))
    }, [searchText])

    const handleSeacrh = (event) => {
        event.preventDefault()
        const searchValue = event.target.search.value;
        setSearchText(searchValue)
    }



    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <div className='container mx-auto '>
                <div className='flex justify-between items-center my-12'>
                    <h1 className='text-center text-3xl font-semibold'>Search Your Favorite Toys</h1>
                    <form onSubmit={handleSeacrh}>
                        <input type="search" name="search" id="" className='w-96 p-2 border-[1px] rounded-md' placeholder='Search Your Toy' />
                        <input type="submit" value="Search" className='bg-gray-200 px-6 py-2 rounded-md' />
                    </form>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller Details</th>
                                <th>Toy Details</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <tr key={toy._id}>
                                    <td>
                                        <h1>{toy?.sellerName ? toy.sellerName : 'not Found'}</h1>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{toy?.seller}</span>
                                    </td>
                                    <td className='w-48'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{toy?.name}</div>
                                                <div className="text-sm opacity-50">{toy?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{toy?.category}</td>

                                    <td>{toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <th>
                                        <Link to={`/toyDetails/${toy?._id}`} className="btn btn-ghost btn-xs">details</Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    page > 20 && <div className='my-8 text-center'>
                        {
                            [...Array(totalPage).keys()].map(page => <button key={page} onClick={() => setCurrentpage(page)} className={currentPage === page ? "bg-amber-400 px-4 py-2 mx-2 rounded-md font-semibold" : "bg-gray-100 px-4 py-2 mx-2 rounded-md font-semibold"}>{page + 1}</button>)
                        }
                    </div>
                }
                
            </div>
        )
    }
};

export default AllToys;