import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const mockLogos = [
  "https://via.placeholder.com/150?text=Bank+of+America",
  "https://via.placeholder.com/150?text=CME+Group",
  "https://via.placeholder.com/150?text=BNP+Paribas",
  "https://via.placeholder.com/150?text=Standard+Chartered",
  "https://via.placeholder.com/150?text=BMO",
  "https://via.placeholder.com/150?text=Wells+Fargo",
];

const InfiniteLogoSlider: React.FC = () => {
  return (
    <div className="overflow-hidden w-full py-4 bg-gray-50">
      <Swiper
        effect="fade" // Use the built-in fade effect
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 2000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Keep autoplay running even on interaction
        }}
        fadeEffect={{ crossFade: true }} // Optional: Smooth fade transitions
        speed={1000} // Transition speed for the fade effect
      >
        {mockLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24">
              <img src={logo} alt={`Logo ${index + 1}`} className="h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteLogoSlider;
