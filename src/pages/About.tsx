import { motion } from "framer-motion";
import InfiniteLogoSlider from "../components/SmoothCarousel";
import MapAnimation from "../components/MapAnimation";
import { useEffect, useState } from "react";
import useScrollHooks from "../hooks/useScrollHooks";
import Metrics from "../components/metrics";

export const About: React.FC = () => {
  useScrollHooks();
  const titleArray = [
    "YOU",
    "HIM",
    "HER",
    "THEM",
    "MOM",
    "DAD",
    "GRANNY",
    "GRANDPA",
    "EVERYONE",
  ];
  const [title, setTitle] = useState<string>("YOU");

  useEffect(() => {
    for (let i = 0; i < titleArray.length * 2; i++) {
      setTimeout(() => {
        setTitle([...titleArray, ...titleArray][i]);
      }, i * 100);
    }
  }, []);

  


  return (
    <>
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="bg-blue-400 py-12 px-5 min-h-screen text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-7xl text-gray-800 leading-loose my-32"
          >
            TECH-IT MAKES{" "}
            <span className="fixed-width-title border-b-8 border-blue-900 font-bold">
              {title}
            </span>{" "}
            A <span className="text-blue-800 font-bold">TECH GURU</span>
          </motion.h1>
          <p className="text-gray-800 mt-4">
            At Tech-IT, we aim to make technology accessible to everyone. From
            cutting-edge gadgets to reliable accessories, our goal is to help
            you stay connected in today's fast-paced world.
          </p>
        </div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 min-h-screen"
        >
          <div className="text-center">
            <div className="min-h-[30vh]">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-7xl font-bold text-gray-800 mb-6"
              >
                WE PARTNER WITH...
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-8"
              >
                We are proud to partner with some of the most innovative
                companies in the tech industry (Fake Sponsorship to display
                technical ability).
              </motion.p>
            </div>
            <InfiniteLogoSlider
              leftOrRight={true}
              images={[
                "/company-logos/dell.png",
                "/company-logos/microsoft.png",
                "/company-logos/nokia.png",
                "/company-logos/company.png",
                "/company-logos/LG.png",
                "/company-logos/meta.png",
                "/company-logos/HP.png",
                "/company-logos/apple.png",
              ]}
            />
          </div>
        </motion.div>

        {/* Delivery Section */}
        <div
          id="delivery"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pb-20 pt-40 mt-16 h-screen"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 , y:0}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="text-3xl font-bold mb-6">Tech-IT Delivery System</motion.h2>
            <motion.p
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 , y:0}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="mb-8">
              Our advanced delivery system ensures your products reach you
              quickly and safely. With real-time tracking and a unique delivery
              ID for every order, you can stay updated at every step.
            </motion.p>
            <MapAnimation />
          </div>
        </div>

        {/* metrics */}
            <Metrics/>

       
      </div>
    </>
  );
};
