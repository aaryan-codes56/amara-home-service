import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Explore from '../../Components/Explore/Explore';
import Banner from '../../Components/Banner/Banner';
import Most from '../../Components/Most/Most';
import FemaleSalon from '../../Components/FemaleSalon/FemaleSalon';
import MaleSalon from '../../Components/MaleSalon/MaleSalon';
import ApplianceRepair from '../../Components/ApplianceRepair/ApplianceRepair';

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Banner />
      <Most />
      <FemaleSalon />
      <ApplianceRepair />
      <MaleSalon />

    </>
  );
};

export default Home;
