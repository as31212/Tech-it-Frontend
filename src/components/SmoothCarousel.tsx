import React from "react";
import { motion } from "framer-motion";

interface InfiniteSliderInterface {
  leftOrRight: boolean; // Determines animation direction
  images: string[]; // Array of image paths
}

const InfiniteLogoSlider: React.FC<InfiniteSliderInterface> = ({ leftOrRight, images }) => {
  const validImages = images && Array.isArray(images) ? images : [];
  console.log("Valid Images:", validImages);

  return (
    <div className="overflow-hidden w-full py-4 relative">
      <motion.div
        className="flex w-max"
        style={{ display: "flex", gap: "2rem" }}
        animate={{
          x: leftOrRight ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 100, // Adjust speed (higher = slower)
          ease: "linear",
        }}
      >
        {/* Use validImages repeatedly without a fixed count */}
        {[...validImages, ...validImages, ...validImages].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center h-56"
            style={{ minWidth: "200px" }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-full object-contain mx-8"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLogoSlider;
