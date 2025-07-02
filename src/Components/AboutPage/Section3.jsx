import React, { useState } from 'react';

const Section3 = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      img: 'images/sec3img.png',
      head: 'Seaside Serenity Villa',
      desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
      price: '$550,000',
      list: [
        { icon: 'images/bed.png', para: '4-Bedroom' },
        { icon: 'images/bath.png', para: '3-Bathroom' },
        { icon: 'images/villa.png', para: 'Villa' },
      ],
    },
    {
      img: 'images/sec3img2.png',
      head: 'Metropolitan Haven',
      desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      price: '$550,000',
      list: [
        { icon: 'images/bed.png', para: '2-Bedroom' },
        { icon: 'images/bath.png', para: '2-Bathroom' },
        { icon: 'images/villa.png', para: 'Villa' },
      ],
    },
    {
      img: 'images/sec3img3.png',
      head: 'Rustic Retreat Cottage',
      desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
      price: '$550,000',
      list: [
        { icon: 'images/bed.png', para: '3-Bedroom' },
        { icon: 'images/bath.png', para: '3-Bathroom' },
        { icon: 'images/villa.png', para: 'Villa' },
      ],
    },
    {
      img: 'images/sec3img.png',
      head: 'Modern Urban Loft',
      desc: 'A sleek 1-bedroom loft apartment with smart home features and urban vibes...',
      price: '$420,000',
      list: [
        { icon: 'images/bed.png', para: '1-Bedroom' },
        { icon: 'images/bath.png', para: '1-Bathroom' },
        { icon: 'images/villa.png', para: 'villa' },
      ],
    },
    {
      img: 'images/sec3img2.png',
      head: 'Countryside Farmhouse',
      desc: 'A spacious 5-bedroom farmhouse with open fields and natural serenity...',
      price: '$850,000',
      list: [
        { icon: 'images/bed.png', para: '5-Bedroom' },
        { icon: 'images/bath.png', para: '4-Bathroom' },
        { icon: 'images/villa.png', para: 'villa' },
      ],
    },
  ];


  const handleToggle = () => setShowAll(!showAll);

  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="responsivewidth">
        {/* Header */}
        <div className="mb-12">
          <img src="images/star.png" alt="star icon" className="mb-4" />
          <h1 className="font-semibold text-2xl md:text-4xl mb-5">Featured Properties</h1>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p className="text-[#999999] md:w-2/3">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
              homes and investments available through Estatein. Click "View Details" for more information.
            </p>
            <button
              onClick={handleToggle}
              className="bg-[#262626] px-6 py-3 border border-gray-700 rounded-lg hover:bg-[#333] transition"
            >
              {showAll ? 'Show Less' : 'View All Properties'}
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(showAll ? data : data.slice(0, 3)).map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition hover:-translate-y-2 duration-300"
            >
              <img src={item.img} alt={item.head} className="w-full h-56 object-cover rounded-lg" />
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">{item.head}</h4>
                <p className="text-sm text-[#999999] mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  {item.list.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 bg-[#262626] py-2 px-3 rounded-full">
                      <img src={feature.icon} alt={feature.para} className="w-5 h-5" />
                      <span className="text-sm text-gray-300">{feature.para}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-10">
                  <span className="font-semibold text-lg">{item.price}</span>
                  <button className="bg-[#703BF7] px-6 py-3 rounded-lg text-sm hover:bg-[#5a2fd3] transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
