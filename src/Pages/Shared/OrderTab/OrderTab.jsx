import FoodCard from "../FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
    );
};

export default OrderTab;