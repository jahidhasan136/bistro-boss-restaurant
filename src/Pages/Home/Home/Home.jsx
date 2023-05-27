import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefServes from "../ChefServes/ChefServes";
import MenuItems from "../MenuItems/MenuItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefServes></ChefServes>
            <MenuItems></MenuItems>
        </div>
    );
};

export default Home;