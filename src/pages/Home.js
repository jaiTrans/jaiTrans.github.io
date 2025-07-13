import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import About from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <About />
            <Intro />
            <Services />
            <Clients />
            <Footer />
        <a
          href="https://wa.me/919911877223?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20logistics%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        >
      <i className="fab fa-whatsapp text-2xl" />
</a>
        </>

    )
}

export default Home;

