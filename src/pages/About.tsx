import { motion } from "framer-motion";
import InfiniteLogoSlider from "../components/SmoothCarousel";
import MapAnimation from "../components/MapAnimation";
import { useEffect, useState } from "react";

export const About: React.FC = () => {
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
      }, i * 120);
    }
  }, []);

  const metrics = [
    { label: "Items Sold", value: 5000 },
    { label: "Partners", value: 200 },
    { label: "Store Locations", value: 150 },
  ];

  const Metric = ({ label, value }: { label: string; value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const increment = Math.ceil(value / 100); // Calculate increment step
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev + increment >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + increment;
        });
      }, 10); // Adjust speed of increment here
      return () => clearInterval(interval);
    }, [value]);

    return (
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-5xl font-bold text-blue-600">{count}</div>
        <div className="text-lg font-semibold text-gray-700">{label}</div>
      </motion.div>
    );
  };

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
            <span className="border-b-8 border-blue-900 font-bold p-0">
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
              <h2 className="text-7xl font-bold text-gray-800 mb-6">
                WE PARTNER WITH...
              </h2>
              <p className="text-gray-600 mb-8">
                We are proud to partner with some of the most innovative
                companies in the tech industry (Fake Sponsorship to display
                technical ability).
              </p>
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
        <motion.div
          id="delivery"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mt-16 h-screen"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tech-IT Delivery System</h2>
            <p className="mb-4">
              Our advanced delivery system ensures your products reach you
              quickly and safely. With real-time tracking and a unique delivery
              ID for every order, you can stay updated at every step.
            </p>
            <MapAnimation />
            <motion.div
              className="text-lg font-semibold mt-6 bg-white text-blue-600 inline-block px-6 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              Delivery ID: <span className="font-bold">#1234-5678</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 bg-gray-100"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              {metrics.map((metric, index) => (
                <Metric key={index} label={metric.label} value={metric.value} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
