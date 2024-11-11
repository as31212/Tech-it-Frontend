// CarouselComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; // core Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselSlide1 from "./CarouselSlide1";
import CarouselSlide2 from "./CarouselSlide2";

const Carousel: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay,Pagination]} // Remove Navigation module
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{delay: 10000 , disableOnInteraction:false}} 
        className="w-full h-[90vh]"
      >
        <SwiperSlide className="">
          <CarouselSlide1 title="We Make Technology Affordable" link="/Products" image="Image-1.png" buttonTitle="More" description="Discover a wide range of affordable products that cater to all your needs and preferences. From stylish home decor to innovative tech gadgets, we offer high-quality items at prices that won’t break the bank. Whether you're looking to refresh your living space, upgrade your electronics, or find practical everyday essentials, our collection provides something for everyone. Browse through our carefully curated selections, each designed to bring both value and satisfaction. Take a look today, and enjoy premium products without the premium price tag!" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide2 title="Our Mission" link="/About" image="image-2.png" buttonTitle="Learn More" description="At Tech IT, we strive to create affordable, high-quality products. Our focus is on delivering exceptional value without compromising on craftsmanship. We believe that technology should empower everyone, enhancing daily life without breaking the bank. With a commitment to innovation and customer satisfaction, we’re constantly expanding our product range to meet diverse needs. Experience technology that’s both accessible and reliable." />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide2 title="Fast & Free Delivery" image="Image-3.png" link="/About#delivery" buttonTitle="Learn More" description="Tech-IT’s delivery system ensures fast, reliable, and secure shipping. With advanced tracking and trusted partners, we keep customers updated from warehouse to doorstep. Offering standard, expedited, and same-day delivery in select areas, Tech-IT prioritizes efficiency and customer satisfaction, so every order arrives swiftly and safely." />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
