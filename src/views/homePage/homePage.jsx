import React from 'react';
import Banner from '../../components/banner/banner';
import About from '../aboutView/about';
import Services from '../servicesView/servicesView';
import Teams from '../teamsView/teamsView';

const HomePage = () => (
  <>
    <Banner />
    <About />
    <Services />
    <Teams />
  </>
);

export default HomePage;
