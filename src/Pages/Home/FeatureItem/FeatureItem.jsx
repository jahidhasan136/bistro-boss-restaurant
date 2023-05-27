import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './FeatureItem.css';

const FeatureItem = () => {
    return (
        <div className="my-24">
            <div className="feature py-16 text-white">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"From Our Menu"}
                ></SectionTitle>
                <div className="flex items-center p-10 gap-5">
                    <img className="w-[450px]" src={img} alt="" />
                    <div className="text-gray-200">
                        <h4 className="text-xl mb-2">March 20, 2023</h4>
                        <p className="uppercase mb-1">Where Can I Get Some?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatem perferendis, ab fugiat id amet vero quisquam aspernatur itaque repellendus explicabo harum? Deleniti, maiores omnis!</p>
                        <button className="btn rounded-md border-white text-white hover:text-white btn-outline border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;