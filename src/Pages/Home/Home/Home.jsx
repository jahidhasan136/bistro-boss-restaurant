import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefServes from "../ChefServes/ChefServes";
import FeatureItem from "../FeatureItem/FeatureItem";
import MenuItems from "../MenuItems/MenuItems";
import Recommends from "../Recommends/Recommends";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefServes></ChefServes>
            <MenuItems></MenuItems>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <FeatureItem></FeatureItem>
        </div>
    );
};

export default Home;