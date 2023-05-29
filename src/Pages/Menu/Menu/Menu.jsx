import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Cover
                img={banner}
                title="Our Menu"
                description="Would you like to try a dish?"
            ></Cover>            
        </div>
    );
};

export default Menu;