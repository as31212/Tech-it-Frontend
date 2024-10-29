import { motion } from "framer-motion";
import { RiLoader2Line } from "react-icons/ri";

const SmallLoading: React.FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    >
      <RiLoader2Line size={24} />
    </motion.div>
  );
};

export default SmallLoading;

//todo this animation makes the div spin and not the actual component, rectify this issue