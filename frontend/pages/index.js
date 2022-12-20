import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Services, NFTSlider, Subscription, Title, Category, Filter } from '../components/componentsIndex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <NFTSlider />
      <Title heading="Featured NFTs" paragraph="Discover the mmost outstanding NFTs in all topics of life."/>
      <Filter />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category />
      <Subscription />
    </div>
  );
};

export default Home