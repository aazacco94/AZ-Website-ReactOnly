import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import {HeroHomeData} from '../components/HeroSection/Data';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne
} from '../components/InfoSection/Data';
import ServiceSection from '../components/ServiceSection';
import { 
  projectServices,
  gameplayServices,
  certificationData 
} from '../components/ServiceSection/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...HeroHomeData}/>
      <InfoSection {...homeObjOne} />
      <ServiceSection {...projectServices} />
      <ServiceSection {...certificationData}/>
      <ServiceSection {...gameplayServices} />
      <Footer />
    </>
  );
}

export default Home;
