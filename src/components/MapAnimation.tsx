import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MapAnimation: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.2, // Delays each div by 0.2 seconds
      },
    }),
  };

  return (
    <div
      id="map-animation-container"
      ref={ref}
      className="flex w-96 flex-col items-start relative h-auto mx-auto"
    >
      {/* First Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[45deg] mx-auto"
        custom={0}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* Second Div */}
      <motion.div
        className="mx-auto w-8 h-8 p-5 rounded-full bg-white rotate-[40deg] relative right-10"
        custom={1}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* Third Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[10deg] relative mx-auto my-[5px] right-16"
        custom={2}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 4 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[-40deg] relative right-14 mx-auto"
        custom={3}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 5 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[-35deg] relative right-6 mx-auto "
        custom={4}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 6 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[45deg] mx-auto"
        custom={5}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 7 Div */}
      <motion.div
        className="mx-auto w-8 h-8 p-5 rounded-full bg-white rotate-[40deg] relative left-10"
        custom={6}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 8 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[10deg] relative mx-auto my-[5px] left-16"
        custom={7}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 9 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[-40deg] relative left-14 mx-auto"
        custom={8}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

      {/* 10 Div */}
      <motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[-35deg] relative left-6 mx-auto "
        custom={9}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>

{/* 11 */}
<motion.div
        className="w-8 h-8 p-5 rounded-full bg-white rotate-[45deg] mx-auto"
        custom={10}
        initial="hidden"
        animate={controls}
        variants={fadeInVariant}
      ></motion.div>
    </div>
  );
};

export default MapAnimation;
