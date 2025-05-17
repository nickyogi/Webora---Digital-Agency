import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Marquees from './components/Marquees';
import Nav from "./components/Nav";
import Products from './components/Products';
import Stripe from './components/Stripes';
import Work from './components/Work';
import Endlinks from './components/Endlinks';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Nav />
      <Work />
      <Stripe />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      <Endlinks />
    </div>
  )
}

export default App