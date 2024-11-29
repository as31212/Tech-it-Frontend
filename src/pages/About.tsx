import { motion } from "framer-motion";
import SmoothCarousel from "../components/SmoothCarousel";

export const About: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">About Tech-IT</h1>
          <p className="text-gray-600 mt-4">
            At Tech-IT, we aim to make technology accessible to everyone. From cutting-edge gadgets to
            reliable accessories, our goal is to help you stay connected in today's fast-paced world.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We are committed to providing high-quality tech solutions that meet the needs of our
            customers. Innovation, reliability, and customer satisfaction are at the core of everything
            we do.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Mission Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
                >
                  <motion.img
                    src="https://via.placeholder.com/150"
                    alt={`Team Member ${idx + 1}`}
                    className="w-32 h-32 rounded-full mb-4"
                    whileHover={{ scale: 1.1 }}
                  />
                  <h3 className="text-lg font-semibold text-gray-700">Team Member {idx + 1}</h3>
                  <p className="text-sm text-gray-600">
                    Passionate about technology and committed to excellence.
                  </p>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Delivery Section */}
        <motion.div
        id="delivery"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mt-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tech-IT Delivery System</h2>
            <p className="mb-4">
              Our advanced delivery system ensures your products reach you quickly and safely. With
              real-time tracking and a unique delivery ID for every order, you can stay updated at every
              step.
            </p>
            <motion.div
              className="text-lg font-semibold mt-6 bg-white text-blue-600 inline-block px-6 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              Delivery ID: <span className="font-bold">#1234-5678</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <SmoothCarousel />
        </motion.div>
      </div>
    </>
  );
};
