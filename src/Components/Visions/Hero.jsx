import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      
      <img
        src="images/vision.jpg"
        alt="Digital Vision"
        className="w-full h-screen object-cover"
      />



      
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="text-white max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#666666] mb-4">
            Elevating Brands in the Digital Age
          </h1>
          <p className="text-xs sm:text-sm text-[#808080] leading-relaxed">
            Welcome to DigitX, your trusted partner in the dynamic world of digital solutions. We are a passionate team of creative minds, tech enthusiasts, and digital strategists, dedicated to empowering businesses and individuals in the digital realm. Our mission is to deliver exceptional results that drive success, create meaningful connections, and bring your digital vision to life. With a customer-centric approach and a focus on innovation, we are committed to being at the forefront of the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
