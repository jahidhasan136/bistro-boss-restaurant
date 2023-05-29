import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";


const MenuItems = () => {

    const [menu] = useMenu()
    const popularItem = menu.filter(items => items.category === "popular")

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div>
                <div className="grid md:grid-cols-2 gap-6">
                {
                  popularItem.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)  
                }
                </div>
                <button className="btn btn-outline mx-auto border-0 border-b-2 flex justify-center mt-5">View Full Menu</button>
            </div>
        </section>
    );
};

export default MenuItems;