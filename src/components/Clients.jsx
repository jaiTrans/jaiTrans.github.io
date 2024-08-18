import React from 'react';
import kws from '../images/clients.jpeg';


const clientImage = {
    height: '20rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div id="clients" className="mt-8 bg-gray-100 mt-4">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
        
                        <div style={clientImage} className= "flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-3/6">
                            <img  className='w-100' src={kws} alt="client" />                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;