import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'
import SectionMenu from "../../Shared/SectionMenu/SectionMenu";
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')
    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Cover
                img={banner}
                title="Our Menu"
                description="Would you like to try a dish?"
            ></Cover>
            <div className="my-20">
                <SectionTitle heading="Today's Menu" subHeading="Don't miss"></SectionTitle>
                <SectionMenu items={popularItems}></SectionMenu>
            </div>
            <div className="my-20">
                <div className="mt-10">
                    <SectionMenu title="DESSERTS" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti." img={dessertImage} items={desserts}></SectionMenu>
                </div>
            </div>
            <div className="my-20">
                <div className="mt-10">
                    <SectionMenu img={pizzaImage} title="Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti." items={pizza}></SectionMenu>
                </div>
            </div>
            <div className="my-20">
                <div className="mt-10">
                    <SectionMenu img={saladImage} title="Salad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti." items={salads}></SectionMenu>
                </div>
            </div>
            <div className="my-20">
                <div className="mt-10">
                    <SectionMenu img={soupImage} title="Soup" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti." items={soups}></SectionMenu>
                </div>
            </div>
        </div>
    );
};

export default Menu;