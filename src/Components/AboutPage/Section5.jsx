import { Star } from 'lucide-react';
import React, { useState } from 'react';

const Section5 = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      img: 'images/testimonials.png',
      name:"Wade Warren",
      location:"USA, California",
      head: 'Exceptional Service!',
      desc: 'Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!',
   
    },
    {
      img: 'images/testimonials2.png',
      name:"Emelie Thomson",
      location:"USA, Florida",
      head: 'Efficient and Reliable',
      desc: 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We could not be happier with the results.',
   
    },
    {
      img: 'images/testimonials3.png',
      name:"John Mans",
      location:"USA, Nevada",
      head: 'Trusted Advisors',
      desc: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
   
    },
    {
      img: 'images/testimonials.png',
      name:"Wade Warren",
      location:"USA, California",
      head: 'Exceptional Service!',
      desc: 'Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!',
   
    },
    {
      img: 'images/testimonials.png',
      name:"Wade Warren",
      location:"USA, California",
      head: 'Exceptional Service!',
      desc: 'Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!',
   
    },

  ];


  const handleToggle = () => setShowAll(!showAll);

  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="responsivewidth">
        {/* Header */}
        <div className="mb-12">
          <img src="images/star.png" alt="star icon" className="mb-4" />
          <h1 className="font-semibold text-2xl md:text-4xl mb-5">What Our Clients Say</h1>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p className="text-[#999999] md:w-2/3">
             Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
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
              <div className='flex gap-3 p-5'>
                  {[...Array(5)].map((_,index)=>(
                    <Star key={index} className='fill-yellow-500 text-yellow-500'/>
                ))}
              </div>
              
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">{item.head}</h4>
                <p className="text-sm text-[#999999] mb-4">{item.desc}</p>

                <div className='flex items-center gap-4'>
                     <img src={item.img} alt={item.head} className=" " />
                <div>
                     <p>{item.name}</p>
                 <p className='text-xs text-[#999999]'>{item.location}</p>
                </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
