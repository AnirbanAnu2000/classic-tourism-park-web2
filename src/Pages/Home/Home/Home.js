import React from 'react';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageClients from '../HomePageClients/HomePageClients';
import HomePageServices from '../HomePageServices/HomePageServices';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
      <HomePageServices></HomePageServices>
      <HomePageClients></HomePageClients>
    </div>
  );
};

export default Home;