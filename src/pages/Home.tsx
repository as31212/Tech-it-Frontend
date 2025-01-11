import React from "react";
import Carousel from "../components/Carousel";
import useScrollHooks from "../hooks/useScrollHooks";
export const Home: React.FC = () => {
  useScrollHooks();
  return (
    <>
    <div className="pb-12 w-screen "><Carousel/></div>

     
    </>
  );
};
