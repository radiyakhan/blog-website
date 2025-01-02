import Image from "next/image";
import React from "react";
import hero from "../../public/heroo.jpg";
import hero1 from "../../public/hero 1.jpg";

const Hero = () => {
  return (
    <div className="mb-32">
      <div className="hero bg-fixed bg-center absolute lg:block hidden">
        <Image src={hero} alt="hero" />
      </div>
      <div className="hero min-h-[100hv] bg-fixed bg-center absolute lg:hidden">
        <Image src={hero1} alt="hero" />
      </div>
      <div className="hero-content relative lg:text-myred2 text-mywhite lg:pl-28 lg:pt-28">
          <h1 className="mb-5 lg:text-5xl pl-5 pt-9 text-lg font-serif">
            <strong>Explore Our Food Recipes</strong>
          </h1>
        </div>
    </div>
  );
};

export default Hero;
