import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaTrash } from 'react-icons/fa';
import Rating from '../../Layout/ShareCompo/Rating/Rating';

const MyToysTable = ({toy,updateModal,findToy,deleteToy}) => {
    const {name,img,price,rating,seller,category,_id,quantity} = toy || {}
    const {user} = useContext(AuthContext)
    return (
        <tr>
            <td><FaTrash onClick={()=>deleteToy(_id)} className='text-2xl text-purple-600'/></td>
            <td className='w-96 overflow-hidden'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Toy Images" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <Rating num={rating}/>
            </td>
            <td>{price}</td>
            <td>
               <h1>{user?.displayName}</h1>
                <span className="badge badge-ghost badge-sm">{seller}</span>
            </td>
            <td>{quantity}</td>
            <th>
                <label onClick={()=>findToy(_id)} htmlFor={updateModal} className="btn btn-ghost btn-xs">update</label>
            </th>
        </tr>
    );
};

export default MyToysTable;