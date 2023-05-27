import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('/public/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(reviews => <SwiperSlide
                        key={reviews._id}
                    >
                        <div className="m-20 text-center flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                            />
                            <FaQuoteLeft className="text-8xl my-8"></FaQuoteLeft>
                            <p>{reviews.details}</p>
                            <h3 className="mt-2 text-yellow-600 text-3xl">{reviews.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;