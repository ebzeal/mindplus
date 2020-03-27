import React from 'react';
import Banner from '../../components/banner/banner';
import About from '../aboutView/about';
import Services from '../servicesView/servicesView';
import Teams from '../teamsView/teamsView';
import Newsletter from '../newsletter/newsletter';
import Contact from '../contact/contact';

const HomePage = () => (
  <>
    <Banner />
    <About />
    <Services />
    <Teams />
    <Newsletter />
    <Contact />
  </>
);

export default HomePage;
