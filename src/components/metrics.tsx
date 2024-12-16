import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";

const Metrics: React.FC = () => {
  // Initialize motion values for the metrics
  const stores = useMotionValue(0);
  const itemsSold = useMotionValue(0);
  const years = useMotionValue(0);

  // Transform motion values to rounded integers
  const roundedStores = useTransform(stores, Math.round);
  const roundedItemsSold = useTransform(itemsSold, Math.round);
  const roundedYears = useTransform(years, Math.round);

  // Ref to track when the element is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  useEffect(() => {
    if (isInView) {
      // Start animations when in view
      animate(stores, 10000, { duration: 5 });
      animate(itemsSold, 12000000, { duration: 6 });
      animate(years, 20, { duration: 4 });
    }
  }, [isInView, stores, itemsSold, years]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap items-center justify-around p-5 min-h-[50vh]"
    >
      <div className="flex flex-col items-center gap-5">
        <FaBirthdayCake className="text-6xl text-blue-500" />
        <h2 className="text-6xl font-bold text-blue-500">
          <motion.span >
            {roundedYears}
          </motion.span>
          +
        </h2>
        <p className="font-bold text-4xl text-blue-500 mb-20">Years in Business</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <IoStorefrontOutline className="text-6xl text-blue-500" />

        <h2 className="text-6xl font-bold text-blue-500">
          <motion.span>{roundedStores}</motion.span>+
        </h2>
        <p className="font-bold text-4xl text-blue-500 mb-20">Stores</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <GiReceiveMoney className="text-blue-500 text-6xl" />

        <h2 className="text-6xl font-bold text-blue-500">
          <motion.span>{roundedItemsSold}</motion.span>+
        </h2>
        <p className="font-bold text-4xl text-blue-500 mb-20">Items Sold</p>
      </div>
    </motion.div>
  );
};

export default Metrics;
