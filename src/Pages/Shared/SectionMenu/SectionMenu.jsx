import PopularMenu from "../PopularMenu/PopularMenu";


const SectionMenu = ({items}) => {
    return (
        <div>
                <div className="grid md:grid-cols-2 gap-6">
                {
                  items.map(item => <PopularMenu key={item._id} item={item}></PopularMenu>)  
                }
                </div>
                <button className="btn btn-outline mx-auto border-0 border-b-2 flex justify-center mt-5">View Full Menu</button>
            </div>
    );
};

export default SectionMenu;