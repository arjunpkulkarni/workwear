import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Swiftees - Custom Apparel & Merchandising</title>
        <meta name="description" content="High-quality custom apparel for the best in business. We specialize in staff uniforms, merchandise and artwork design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Services />
        <Footer />
      </main>
    </>
  );
};

export default Home; 