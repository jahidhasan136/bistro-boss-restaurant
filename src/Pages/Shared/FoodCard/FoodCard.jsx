import img from '../../../assets/menu/dessert-bg.jpeg'

const FoodCard = ({ item }) => {

    const { image, name, recipe, price } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;