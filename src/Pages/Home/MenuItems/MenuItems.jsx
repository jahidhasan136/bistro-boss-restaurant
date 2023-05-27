import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";


const MenuItems = () => {

    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('/public/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(items => items.category === "popular")
            setMenu(popularMenu)
        })
    },[])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                  menu.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)  
                }
            </div>
        </section>
    );
};

export default MenuItems;