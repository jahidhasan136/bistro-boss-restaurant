import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";


const MyCart = () => {
    const [carts] = useCart()
    console.log(carts)
    const total = carts.reduce((sum, item) => item.price + sum, 0)
    const [, refetch] = useCart()

    const handleDelete = item => {
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
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch()
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

    return (
        <div className="mt-56 w-full">
            <div className="flex justify-evenly items-center font-semibold h-20">
                <h2 className="text-3xl">Total Items: {carts.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <p><button className="btn btn-warning btn-sm">PAY</button></p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            carts.map((item, index) => <tr
                                key={item._id}
                            >
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button onClick={()=> handleDelete(item)} className="btn btn-ghost btn-lg bh"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)
                        }

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;