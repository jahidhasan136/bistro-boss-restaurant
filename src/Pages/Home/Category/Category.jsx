import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <div className="my-24">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <img src={img1} className="w-full" alt="" />
                    <h3 className="-mt-16 text-2xl text-[#6C6A6A] text-center">SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className="w-full" alt="" />
                    <h3 className="-mt-16 text-2xl text-[#6C6A6A] text-center">SOUPS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className="w-full" alt="" />
                    <h3 className="-mt-16 text-2xl text-[#6C6A6A] text-center">PIZZAS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className="w-full" alt="" />
                    <h3 className="-mt-16 text-2xl text-[#6C6A6A] text-center">dESSERTS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} className="w-full" alt="" />
                    <h3 className="-mt-10 text-2xl text-[#6C6A6A] text-center">SALADS</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;