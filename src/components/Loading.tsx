import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-12 h-12 bg-blue-500 rounded-full"
        animate={{
          y: ["0%", "-50%", "0%"], // Bouncing up and down
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loading;
