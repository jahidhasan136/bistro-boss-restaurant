import { useContext } from 'react';
import img from '../../../assets/menu/dessert-bg.jpeg'
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {

    const { name, recipe, price, _id } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [, refetch] = useCart()

    const handleAddTo = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {menuItem: _id, name, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div className="card rounded-none w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{recipe}</p>
                <p className='bg-black text-white absolute top-5 right-10 px-5 py-2 rounded-md shadow-2xl'>{'$' + price}</p>
                <div className="">
                    <button onClick={() => handleAddTo(item)} className='uppercase btn btn-outline border-0
                         border-b-4 text-yellow-600 hover:text-yellow-600'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;