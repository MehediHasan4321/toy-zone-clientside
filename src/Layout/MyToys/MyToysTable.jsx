import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToysTable = ({ toy,updateModal,handleUpdate,handleDelete }) => {
    const {name,img,price,seller,category,_id}= toy || {}
    const {user} = useContext(AuthContext)
    return (
        <tr>
            <th>
             <FaTrash onClick={()=>handleDelete(_id)} className='text-2xl'/>   
            </th>
            <td>
                <div className="flex items-center space-x-3 w-48">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <th>{price}</th>
            <td>
                <h1>{user?.displayName}</h1>
                <br />
                <span className="badge badge-ghost badge-sm">{seller}</span>
            </td>
            <td>12</td>
            <th>
                <label onClick={()=>handleUpdate(_id)} htmlFor={updateModal} className="btn btn-ghost btn-xs">Update</label>
            </th>
        </tr>
    );
};

export default MyToysTable;