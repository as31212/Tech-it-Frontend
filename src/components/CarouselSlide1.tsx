import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { carouselSlideInterface } from "../interfaces/carouselSlideInterface";

const CarouselSlide1: React.FC<carouselSlideInterface> = ({ title, description, link, image, buttonTitle }) => {
    const controls = useAnimation();

    return (
        <div className="flex justify-center items-center h-full flex-wrap ">
            <div className="flex flex-col gap-5 justify-center max-w-[700px]">
                <motion.h2
                    initial={{ opacity: 0, x: -300 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 0.6 }}
                    onViewportEnter={() => controls.start({ opacity: 1, x: 0 })}
                    onViewportLeave={() => {
                        controls.stop();
                        controls.set({ opacity: 0, x: -300 });
                    }}
                    className="font-bold text-6xl w-[500px] leading-tight header-text"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 1.2 }}
                    onViewportEnter={() => controls.start({ opacity: 1 })}
                    onViewportLeave={() => {
                        controls.stop();
                        controls.set({ opacity: 0 });
                    }}
                    className="text-gray-800 w-[90%] center-description"
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 1.8 }}
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
                initial={{ opacity: 0, x: 300 }}
                animate={controls}
                transition={{ duration: 0.6 }}
                onViewportEnter={() => controls.start({ opacity: 1, x: 0 })}
                onViewportLeave={() => {
                    controls.stop();
                    controls.set({ opacity: 0, x: 300 });
                }}
                className="w-1/3 min-w-[300px]"
                src={image}
                alt="Carousel Image"
            />
        </div>
    );
};

export default CarouselSlide1;
