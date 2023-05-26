import React, { useContext, useState } from 'react';
import Rating from '../ShareCompo/Rating/Rating';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { key } from 'localforage';
import useTitle from '../../CustomLoader/UseTitle';

const AddToys = () => {
    const toyCategory = ["marvel", "ironman", "venom", "adventure", "transformers", "spiderman", "batman", "starwar"]
    const toySubCategory = ["Action","Villain","Other"]
    const [toyCate, setToyCate] = useState('')
    const {toySubCat,setToySubCat} = useState('')
    const [previewToy, setPreviewToy] = useState({})
    const { user } = useContext(AuthContext)
    useTitle("Add Toy")
    const handleAddToyCartPreview = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const img = form.url.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value
        const subCategory = form.subCategory.value
        const seller = form.email.value;
        const sellerName  = form.sellerName.value
        const details = form.details.value
        const toy = { name, img, price, rating, quantity, category,subCategory, seller, sellerName, details }
        
        setPreviewToy(toy)
    }
    const addToytoShop = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want To Add this Toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Added it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toyshop-zeta.vercel.app/addToy`, {
                    method: "Post",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(previewToy)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Added!',
                                'Your file has been Added.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className='container mx-auto my-24'>
            <form onSubmit={handleAddToyCartPreview}>
                <div className='flex gap-5 my-4'>
                    <div className='w-1/3'>
                        <label htmlFor="name">Toy Name</label>
                        <input type="text" required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' name="name" id="name" />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="url">Toy Images Url</label>
                        <input type="url" name="url" required id="url" className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="price">Toy Price</label>
                        <input type="number" required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' name="price" id="price" />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-1/3'>
                        <label htmlFor="quantity">Toy Quantity</label>
                        <input type="number" name="quantity" id="quantity" required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="rating">Toy Rating</label>
                        <input type="rating" name="rating" id="rating" required className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="email">Toy Seller Email</label>
                        <input type="email" name="email" required id="email" value={user?.email} className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="SellerName">Toy Seller Name</label>
                        <input type="text" name="SellerName" required id="sellerName" value={user?.displayName} className='w-full py-2 px-2 border-[1px] rounded-md mt-2' />
                    </div>
                </div>
                <div className='flex gap-5 my-4'>
                    <div className='w-1/2'>
                        <label htmlFor="category">Toy Category</label>
                        <select name="category" id="category" defaultValue={toyCate}  required className='w-full py-2 px-2 border-[1px] rounded-md mt-2'>
                            {
                                toyCategory?.map((toy, index) => <option onChange={()=>setToyCate(key)} key={index} value={toy}>{toy}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="subCategory">Toy Sub-Category</label>
                        <select name="subCategory" id="subCategory" defaultValue={toySubCat}  required className='w-full py-2 px-2 border-[1px] rounded-md mt-2'>
                            {
                                toySubCategory?.map((toy, index) => <option key={index} onChange={()=>setToySubCat(toy)} value={toy}>{toy}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='w-full mt-8'>
                    <textarea name="details" id="" required className='w-full h-32 p-3 border-[1px] rounded-md' placeholder='Enter Your Toy Details'>

                    </textarea>
                </div>
                <div className='flex gap-3 mt-8'>
                    <input type="submit" className='bg-amber-400 font-semibold py-2 px-6 mt-3 w-1/2 rounded-md cursor-pointer' value="submit Toy Data" />
                    <label htmlFor='SeePreview' className='bg-amber-400 font-semibold py-2 px-6 mt-3 w-1/2 rounded-md text-center cursor-pointer'>See Preview</label>
                </div>
            </form>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="SeePreview" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className='w-96 h-[520px] border-[1px] rounded-md relative'>
                        <div className='w-full h-80 bg-gray-100 p-3'>
                            <img className='w-full h-full' src={previewToy?.img} alt="" />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>{previewToy?.name}</h1>
                            <div className='flex justify-between items-center mt-5'>
                                <h4 className='text-lg font-semibold'>Price : ${previewToy?.price}</h4>
                                <Rating num={previewToy?.rating} />
                            </div>
                            <button onClick={addToytoShop} className='bg-amber-400 w-[350px] py-2 font-semibold text-lg absolute bottom-2 rounded-md text-center'>Add Toy To Your Shop</button>
                        </div>
                    </div>
                    <div className="modal-action absolute top-[-30px] right-0">
                        <label htmlFor="SeePreview" className='bg-amber-400 p-3'>Close</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddToys;