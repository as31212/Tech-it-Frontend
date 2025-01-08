import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { carouselSlideInterface } from "../interfaces/carouselSlideInterface";

const CarouselSlide2: React.FC<carouselSlideInterface> = ({ title, description, link, image, buttonTitle }) => {
    const controls = useAnimation();

    return (
        <div className="flex justify-center items-center h-full flex-wrap carousel-2">
            <div className="flex flex-col gap-5 justify-center w-[700px] carousel-text p-5">
                <motion.h2
                    initial={{ opacity: 0, y: 200 }}
                    animate={controls}
                    transition={{ duration: 1 }}
                    onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
                    onViewportLeave={() => {
                        controls.stop(); // Stops any in-progress animation
                        controls.set({ opacity: 0, y: 200 }); // Instantly reverts to initial state
                    }}
                    className="font-bold text-6xl w-[500px] leading-tight header-text "
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 200 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 0.6 }}
                    onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
                    onViewportLeave={() => {
                        controls.stop();
                        controls.set({ opacity: 0, y: 200 });
                    }}
                    className="text-gray-800 carousel-description"
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 1.2 }}
                    onViewportEnter={() => controls.start({ opacity: 1 })}
                    onViewportLeave={() => {
                        controls.stop();
                        controls.set({ opacity: 0 });
                    }}
                >
                    <Link to={link} className="font-bold text-lg bg-blue-500 text-white hover:brightness-90 ease-in-out duration-200 py-2 px-6 w-fit rounded-full">
                        {buttonTitle}
                    </Link>
                </motion.div>
            </div>
            <motion.img
                initial={{ opacity: 0, y: 200 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.8 }}
                onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
                onViewportLeave={() => {
                    controls.stop();
                    controls.set({ opacity: 0, y: 200 });
                }}
                className="w-1/3 min-w-[350px] home-carousel-image"
                src={image}
                alt="Carousel Image"
            />
        </div>
    );
};

export default CarouselSlide2;
