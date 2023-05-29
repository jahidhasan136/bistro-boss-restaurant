import img1 from '../../../assets/menu/dessert-bg.jpeg';

const PopularMenu = ({ item }) => {
    const { name, recipe, price } = item
    return (
        <div className="flex mt-10">
            <img className='w-20 mr-5' style={{ borderRadius: '0px 300px 300px 300px' }} src={img1} alt="" />
            <div>
                <h3 className='text-xl'>{name} -------------------</h3>
                <p className='text-gray-400'>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-medium'>{'$' + price}</p>
        </div>
    );
};

export default PopularMenu;