import React from 'react';
import Style from '../styles/index.module.css';
import { HeroSection, Services, NFTSlider } from '../components/componentsIndex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <NFTSlider />
    </div>
  );
};

export default Home