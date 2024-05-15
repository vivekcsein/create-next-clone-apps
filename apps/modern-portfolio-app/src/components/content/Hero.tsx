import React from "react";
import UI_Input from "../ui/Input_/UI_Input";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:h-lg md:h-md sm:h-sm h-vh flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto">
        {/* left side text  */}
        <div className="col-span-2">
          <h1>
            Hi, I'm <b>Vivek</b>. A full stack developer.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            tempora assumenda mollitia perspiciatis sint ex, cumque asperiores
            dolor optio unde esse, quos minus eius necessitatibus officia
            voluptate commodi ea impedit!
          </p>
          <UI_Input />
        </div>
        {/* right side image  */}
        <div className="col-span-3 hidden sm:block mx-auto">
          <Image src="/images/hero.png" alt={""} width={512} height={512} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
