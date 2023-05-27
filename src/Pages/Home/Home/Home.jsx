import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
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
            <CallUs></CallUs>
        </div>
    );
};

export default Home;