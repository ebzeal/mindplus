import React from 'react';
import Banner from '../../components/banner/banner';
import Advert from '../advertView/advert';
import About from '../aboutView/about';
import Services from '../servicesView/servicesView';
import Teams from '../teamsView/teamsView';
import Resource from '../resourceView/resourceView';
import Newsletter from '../newsletter/newsletter';
import Contact from '../contact/contact';
import Jingle from '../../components/jingle';

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {/* <Advert /> */}
      <Banner />
      <About />
      <Teams />
      <Services />
      <Newsletter />
      <Contact />
    </>
  );
};

export default HomePage;
