import React from 'react';

import Style from '../styles/index.module.css';
import { HeroSection, Services, NFTSlider, Subscription, Title, Category, Filter, Card, Collection, FollowerSection, Audio } from '../components/componentsIndex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <NFTSlider />
      <Title heading="Audio Collection." paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Audio/>
      <Title heading="Find by Collection." paragraph="Discover the mmost outstanding NFTs in all topics of life."/>
      <FollowerSection />
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the mmost outstanding NFTs in all topics of life."/>
      <Filter />
      <Card />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category />
      <Subscription />
    </div>
  );
};

export default Home