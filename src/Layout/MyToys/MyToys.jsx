import { useLoaderData } from "react-router-dom";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";

const MyToys = () => {
    const toys = useLoaderData()
    const handleUpdate = id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want To Update this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Update!',
                'Your file has been Updated.',
                'success'
              )
            }
          })
    }
    const handleDelete = id=>{
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
                fetch(`https://my-toy-shop-server.vercel.app/allToy/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            }
          })
    }
    return (
        <div className=' container mx-auto'>
            <h1>Your Toy Found Total {toys.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Toy</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Quantity</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysTable key={toy._id} toy={toy} updateModal={"updateModal"} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)
                        }
                    </tbody>
                </table>
            </div>
            
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="updateModal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyToys;