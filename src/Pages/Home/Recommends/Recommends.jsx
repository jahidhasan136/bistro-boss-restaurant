import img from '../../../assets/home/slide1.jpg';

const Recommends = () => {
    return (
        <div className='my-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center container mx-auto'>
            <div className="card w-96 rounded-none bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full h-72' alt="Shoes" /></figure>
                <div className="card-body text-center bg-stone-100">
                    <h2 className="card-title font-bold flex justify-center">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                        <button className="btn rounded-md border-yellow-600 text-yellow-600 hover:text-yellow-600 btn-outline border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 rounded-none bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full h-72' alt="Shoes" /></figure>
                <div className="card-body text-center bg-stone-100">
                    <h2 className="card-title font-bold flex justify-center">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                    <button className="btn rounded-md border-yellow-600 text-yellow-600 hover:text-yellow-600 btn-outline border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 rounded-none bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full h-72' alt="Shoes" /></figure>
                <div className="card-body text-center bg-stone-100">
                    <h2 className="card-title font-bold flex justify-center">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                    <button className="btn rounded-md border-yellow-600 text-yellow-600 hover:text-yellow-600 btn-outline border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;