import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionMenu from "../../Shared/SectionMenu/SectionMenu";


const MenuItems = () => {

    const [menu] = useMenu()
    const popularItem = menu.filter(item => item.category === "popular")

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <SectionMenu items={popularItem}></SectionMenu>
        </section>
    );
};

export default MenuItems;