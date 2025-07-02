const Hero = () => {
    const data=[
        {
            count:"200+",
            para:"Happy Customers"
        },
        {
            count:"10k +",
            para:"Properties For Clients"
        },
        {
            count:"16+",
            para:"Years of Experience"
        },
    ]
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-white px-6 sm:px-10 md:px-16 py-16 text-center md:text-left">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
          Discover Your Dream Property with Estatein
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
          Your journey to finding the perfect property begins here. Explore our listings to find the home that matches
          your dreams.
        </p>

        <div className="flex :flex-row justify-center md:justify-start gap-4 mt-8">
          <button className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
          <button className="px-5 py-3 bg-[#703BF7] rounded-lg hover:bg-[#5a2fd3] transition duration-300">
            Browse Properties
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
            {
                data.map((items,index)=>(
                    <div key={index} className="bg-[#262626] p-3 rounded-lg">
                        <h3 className="font-bold text-2xl">{items.count}</h3>
                        <p className="text-[#999999]">{items.para}</p>
                    </div>
                ))
            }
            
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] sm:h-[400px] md:h-auto">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonalLines"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="40" stroke="#4A90E2" strokeWidth="0.5" />
              </pattern>
              <pattern
                id="diagonalLinesReverse"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(-45)"
              >
                <line x1="0" y1="0" x2="0" y2="40" stroke="#4A90E2" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            <rect width="100%" height="100%" fill="url(#diagonalLinesReverse)" />
          </svg>
        </div>

        {/* Radial lines for depth */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-center"
                style={{
                  transform: `rotate(${i * 15}deg)`,
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-8 ">
          <img
            src="/images/aboutimg.png"
            alt="Dream Property"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
