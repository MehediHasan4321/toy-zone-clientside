import React, { useContext, useEffect, useState } from 'react';
import MyToysTable from './MyToysTable';
import Swal from 'sweetalert2';
import useTitle from '../../CustomLoader/UseTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Layout/ShareCompo/Loading/Loading';

const Mytoys = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toys, setToys] = useState([])
    const [updateAble, setUpdateAble] = useState({})
    const [toyCate, setCategory] = useState(updateAble.category)
    const [subCate, setSubCete] = useState(updateAble.subCategory)
    const [sortValue, setSortValue] = useState(1)
    const { user } = useContext(AuthContext)
    const toyCategory = ["marvel", "ironman", "venom", "adventure", "transformers", "spiderman", "batman", "starwar"]
    const toySubCategory = ["Action", "Villain", "Other"]
   
    useTitle('My Toys')
    const findToy = id => {
        setUpdateAble(toys.find(toy => toy._id === id))
    }
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://my-toy-shop-server.vercel.app/myToys/${user?.email}?sort=${sortValue}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .finally(() => setIsLoading(false))
    }, [sortValue])

    const hanldeSort = e => {
        setSortValue(e.target.value)
    }

    const updateToy = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const img = form.url.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const subCategory = form.subCategory.value
        const details = form.details.value;
        const quantity = form.quantity.value
        const updateToy = { name, img, price, rating, category, subCategory, details, quantity }

        Swal.fire({
            title: 'Are you sure?',
            text: "You Want To Update this Toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-toy-shop-server.vercel.app/allToy/${updateAble._id}`, {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(updateToy)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            form.reset()
                            Swal.fire(
                                'Updated!',
                                'Your file has been Update.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    const deleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-toy-shop-server.vercel.app/allToy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setToys(toys.filter(toy => toy._id !== id))
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })
    }
    if (isLoading) {
        return <Loading />
    } else {
        return (
            <div className='container mx-auto'>
                <div className='my-2'>
                    <span className='text-xl font-semibold mr-2'>Sort By Price</span>
                    <select onChange={hanldeSort} value={sortValue} className='px-4 py-2 bg-[#f2f2f2]' name="sort" id="">
                        <option value={1}>Assending</option>
                        <option value={-1}>Desending</option>
                    </select>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Details</th>
                                <th>Rating</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Seller</th>
                                <th>Quantity</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                toys?.map(toy => <MyToysTable key={toy._id} toy={toy} updateModal={'updateModal'} deleteToy={deleteToy} findToy={findToy} />)
                            }
                        </tbody>
                    </table>
                </div>
                {/* The button to open modal */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="updateModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={updateToy}>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="name">Toy Name</label>
                                    <input type="text" defaultValue={updateAble?.name} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' name="name" id="name" />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="url">Toy Images Url</label>
                                    <input type="url" name="url" defaultValue={updateAble?.img} required id="url" className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/3'>
                                    <label htmlFor="price">Toy Price</label>
                                    <input type="number" defaultValue={updateAble?.price} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' name="price" id="price" />
                                </div>
                                <div className='w-1/3'>
                                    <label htmlFor="quantity">Toy Quantity</label>
                                    <input type="number" name="quantity" id="quantity" defaultValue={updateAble?.quantity} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                                </div>
                                <div className='w-1/3'>
                                    <label htmlFor="rating">Toy Rating</label>
                                    <input type="rating" name="rating" id="rating" defaultValue={updateAble?.rating} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                                </div>

                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="category">Toy Category</label>
                                    <select name="category" id="category" onChange={() => setCategory(toyCate)} value={toyCate} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2'>
                                        {
                                            toyCategory.map((toy, index) => <option key={index} value={toy}>{toy}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="subCategory">Toy Sub-Category</label>
                                    <select name="subCategory" id="subCategory" onChange={() => setSubCete(subCate)} value={subCate} required className='w-full py-2 px-2 border-[1px] rounded-md mt-2'>
                                        {
                                            toySubCategory.map((toy, index) => <option key={index} value={toy}>{toy}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='w-full mt-2'>
                                <textarea name="details" id="" defaultValue={updateAble?.details} required className='w-full h-32 p-3 border-[1px] rounded-md' placeholder='Enter Your Toy Details'>

                                </textarea>
                            </div>
                            <input type="submit" className='bg-amber-400 font-semibold py-2 px-6 mt-3 w-full rounded-md' value="Update" />
                        </form>
                        <div className="modal-action">

                            <label onClick={() => setUpdateAble({})} htmlFor="updateModal" className="btn">Close</label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default Mytoys;