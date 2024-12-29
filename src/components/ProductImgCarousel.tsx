import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductImgCarousel {
  images: string[];
}

const ProductImgCarousel: React.FC<ProductImgCarousel> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <div className="max-w-[900px] mx-auto flex gap-6">
      {/* Thumbnail Navigation (Left) */}
      <div className="w-1/5 max-h-[50vh]">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="h-full cursor-pointer"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-cover rounded-3xl hover:brightness-75 transition duration-150 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Image Carousel */}
      <div className="max-w-[25vw]">
        <Swiper
          modules={[ Thumbs]}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          className="mb-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Product image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImgCarousel;
