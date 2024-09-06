import React from 'react';
import fullSizeCargo from '../images/fireflycargo.jpg'; 
import halfTruckLoading from '../images/HalfLoaded.jpg';
import img3 from '../images/odc.jpg';
import img4 from '../images/consultations.jpg';
import CityTable from './CityMap';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={fullSizeCargo} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Full Truck Loading</h2>
                                    <p className="text-md font-medium">
                                    Jai Trans offers a comprehensive Full Truck Load (FTL) movement across the nation. The company’s strong nationwide infrastructure, assures customers of the FTL services at the most reasonable rate. No matter where the raw material or plant or customer is located, ‘’Jai Trans’’ undertakes to meet its customer’s complete transportation and distribution needs.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] h-200 transition duration-1000 ease-in-out" src={halfTruckLoading} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Half Truck Loading</h2>
                                    <p className="text-md font-medium">
                                    "At Jai Trans, we understand that not every shipment requires a full truck. Our Half Truck Load (HTL) services are tailored for businesses that need to transport smaller quantities of goods efficiently. With our extensive network and commitment to timely deliveries, Jai Trans ensures that your partial loads reach their destinations with the same care and reliability as full loads. Whether it’s raw materials, finished goods, or anything in between, our HTL services offer a cost-effective and flexible solution for all your transportation needs."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Over Dimensional Cargo (ODC)</h2>
                                    <p className="text-md font-medium">
                                    Handling oversized and heavy cargo requires expertise and precision. Jai Trans specializes in Over Dimensional Cargo (ODC) transportation, offering custom solutions for the most challenging logistics projects. Our team of experts ensures that your ODC is transported safely and efficiently, complying with all regulatory requirements and using the best-suited equipment. From planning the route to coordinating with local authorities, Jai Trans takes care of every detail, so you can be confident that your oversized cargo will arrive on time and in perfect condition, no matter the size or destination."                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">General Consultations</h2>
                                    <p className="text-md font-medium">
                                    Jai Trans extends beyond just transportation with our General Consultation services, designed to offer expert advice and strategic planning for your logistics and supply chain needs. Whether you’re navigating complex transportation challenges or seeking to optimize your distribution network, our team of seasoned professionals is here to guide you every step of the way. With deep industry knowledge and a commitment to tailored solutions, Jai Trans ensures that your business operations run smoothly, efficiently, and cost-effectively. Let us help you turn logistics challenges into opportunities for growth.                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                
                <div className="m-auto max-w-6xl mt-8 p-4 md:p-12 h-5/6">
                <label className='text-gray-600 text-2xl'>We are available at:</label>
                       <CityTable />
                    
                </div>
            </section>
        </div>
    )
}

export default Services;