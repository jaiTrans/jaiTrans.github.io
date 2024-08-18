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
        </>

    )
}

export default Home;

