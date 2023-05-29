import img from '../../../assets/menu/dessert-bg.jpeg'

const FoodCard = ({ item }) => {

    const { name, recipe, price } = item

    return (
        <div className="card rounded-none w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{recipe}</p>
                <p className='bg-black text-white absolute top-5 right-10 px-5 py-2 rounded-md shadow-2xl'>{'$' + price}</p>
                <div className="">
                    <button className='uppercase btn btn-outline border-0
                         border-b-4 text-yellow-600 hover:text-yellow-600'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;