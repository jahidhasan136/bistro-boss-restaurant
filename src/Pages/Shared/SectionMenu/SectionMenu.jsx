import { Link } from "react-router-dom";
import PopularMenu from "../PopularMenu/PopularMenu";
import Cover from "../Cover/Cover";


const SectionMenu = ({items, title, img}) => {
    return (
        <div>
          {title && <Cover img={img} title={title}></Cover>}
                <div className="grid md:grid-cols-2 gap-6">
                {
                  items.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)  
                }
                </div>
                <Link to={`/order/${title}`}><button className="btn btn-outline mx-auto border-0 border-b-2 flex justify-center mt-5 uppercase">Order your favourite Food</button></Link>
            </div>
    );
};

export default SectionMenu;