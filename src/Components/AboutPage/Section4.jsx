import React from 'react'

const Section4 = () => {
    const data = [
        {
            img: "images/sec4img.png",
            head: "John Smith",
            position: "Co-Founder & CEO",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img2.png",
            head: "Sarah Adams",
            position: "Head of Design",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img3.png",
            head: "Michael Williams",
            position: "Project Manager",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img4.png",
            head: "Emily Johnson",
            position: "Lead Web Developer",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img5.png",
            head: "Jessica Lee",
            position: "UX/UI Designer",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img6.png",
            head: "Robert Johnson",
            position: "Lead Mobile App Developer",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img7.png",
            head: "Emma Taylor",
            position: "Digital Marketer",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
        {
            img: "images/sec4img8.png",
            head: "Olivia Martin",
            position: "Content Specialist",
            list: [
                {
                    icon: "images/insta.png"
                },
                {
                    icon: "images/x.png"
                },
                {
                    icon: "images/linkedin.png"
                },
            ]
        },
    ]
    return (
        <>
            <div className='flex justify-center'>
                <div className='text-white w-full md:w-[70%] sm:w-[80%] space-y-4 p-5'>
                    <h1 className='font-bold text-2xl md:text-4xl text-center'> <span className='text-[#999999]'>Our</span> Team Members</h1>
                    <p className='text-[#999999]'>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
                </div>


            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 responsivewidth mt-20'>
                {
                    data.map((items, index) => (
                        <div key={index} className='bg-[#0F0F0F] flex flex-col items-center p-3 text-white space-y-5 rounded-2xl'>
                            <img src={items.img} alt="" className='mt-5' />
                            <h5 className='font-bold'>{items.head}</h5>
                            <p className="bg-gradient-to-l from-black to-transparent p-3 text-white rounded-full border border-gray-700 text-sm">
                                {items.position}
                            </p>

                            <div className='h-[0.2px] w-full bg-gray-900'></div>

                            <div className='flex flex-wrap gap-2'>
                                {items.list.map((elem, index) => (
                                    <div key={index}>
                                        <img src={elem.icon} alt="" width={50} />

                                    </div>
                                ))}
                            </div>

                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Section4
