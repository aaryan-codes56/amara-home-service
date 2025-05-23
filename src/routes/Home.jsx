import React from 'react';
import Hero from '../Components/Hero/Hero';
import Explore from '../Components/Explore/Explore';
import Banner from '../Components/Banner/Banner';
import Most from '../Components/Most/Most';
import FemaleSalon from '../Components/FemaleSalon/FemaleSalon';
import MaleSalon from '../Components/MaleSalon/MaleSalon';
import Appliance from '../Components/Appliance/ApplianceRepair';
import HomeRepair from '../Components/HomeRepair/HomeRepair';

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Banner />
      <Most />
      <FemaleSalon />
      <Appliance />
      <HomeRepair />
      <MaleSalon />

    </>
  );
};

export default Home;
