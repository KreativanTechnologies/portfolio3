import React from 'react';

const Section3 = () => {
  const data = [
    {
      img: 'images/visionicon.png',
      head: 'Market Insight',
      desc: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
    },
    {
      img: 'images/visionicon2.png',
      head: 'ROI Assessment',
      desc: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
    },
    {
      img: 'images/visionicon3.png',
      head: 'Customized Strategies',
      desc: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
    },
    {
      img: 'images/visionicon4.png',
      head: 'Diversification Mastery',
      desc: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-16 ">
      
        <img src="images/star.png" alt="star" className='mb-10' />
      

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side */}
        <div className="w-full lg:w-[40%] space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-2xl font-semibold text-white leading-snug">
            Smart Investments, Informed Decisions
          </h1>
          <p className="text-[#999999] leading-relaxed">
            Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service
            empowers you to make smart investments and informed decisions.
          </p>

          <div className="bg-[#262626] text-white px-6 py-5 space-y-4 rounded-lg">
            <h5 className="font-semibold text-lg">Unlock Your Investment Potential</h5>
            <p className="text-sm text-gray-300">
              Explore our Property Management Service categories and let us handle the complexities while you enjoy the
              benefits of property ownership.
            </p>
            <button className="bg-[#141414] hover:bg-[#1f1f1f] transition w-full p-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[60%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#262626] p-2 rounded-xl">
            {data.map((items, index) => (
              <div
                key={index}
                className="bg-[#141414] p-5 space-y-4 border border-zinc-800 rounded-xl h-full hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img src={items.img} alt={items.head} width={60} className="shrink-0" />
                  <h5 className="text-white font-semibold">{items.head}</h5>
                </div>
                <p className="text-[#999999] text-sm leading-relaxed">{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
