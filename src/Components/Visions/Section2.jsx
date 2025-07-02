import { Zap, Droplet, Users, Sparkles } from "lucide-react"

const Section2 = () => {
  const data = [
    {
      img:"images/visionimg.png",
      head: "Strategic Planning",
      desc: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
    },
    {
      img:"images/visionimg2.png",
      head: "Customized Solutions",
      desc: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
    },
    {
       img:"images/visionimg3.png",
      head: "User-Centric Approach",
      desc: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
    },
    {
       img:"images/visionimg4.png",
      head: "Cutting-Edge Technologies",
      desc: "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
    },
    {
       img:"images/visionimg5.png",
      head: "Timely Delivery",
      desc: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
    },
  ]

  return (
    <div className=" min-h-screen py-16 px-4">
      <div className="flex justify-center mb-16">
        <div className="text-white max-w-4xl px-5 md:px-5">
          <h1 className="text-center text-2xl md:text-4xl font-bold mb-5">
            Key Features <span className="text-[#666666]">of Our Projects</span>
          </h1>
          <p className="text-[#808080] text-center">
            Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved
            customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs,
            ensuring lasting success.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="text-center px-6">
              <div className="flex justify-center mb-6">
               <img src={item.img} alt="" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{item.head}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.slice(3).map((item, index) => (
            <div key={index + 3} className="text-center px-6">
              <div className="flex justify-center mb-6">
            <img src={item.img} alt="" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{item.head}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section2
