import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { carouselSlideInterface } from "../interfaces/carouselSlideInterface";

const CarouselSlide2:React.FC<carouselSlideInterface> = ({title,description,link,image,buttonTitle})=>{
return(
    <>
    <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-5 justify-center w-[700px]">
            <motion.h2
            initial={{opacity:0 , y: 200}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1}}
            viewport={{once:true}}
            className="font-bold text-6xl w-[500px] leading-tight">{title}</motion.h2>
            <motion.p 
            initial={{opacity:0, y:200}}
            whileInView={{opacity: 1 , y:0}}
            transition={{duration: 1 , delay:0.6}}
            viewport={{once:true}}
            className="text-gray-800">{description}</motion.p>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1 , delay:1.2}}
            viewport={{once:true}}
            >
                <Link to={link} className="font-bold text-lg bg-blue-500 text-white hover:brightness-90 ease-in-out duration-200 py-2 px-6 w-fit rounded-full ">{buttonTitle}</Link>
            </motion.div>
        </div>
        <motion.img 
        initial={{opacity:0 , y: 200}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: .6, delay:0.8 }}
        viewport={{once:true}}
        className="w-1/3"
        src={image} alt="Carousel Image" />
    </div>
    </>
);
}

export default CarouselSlide2;