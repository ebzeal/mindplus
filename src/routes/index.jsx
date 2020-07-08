import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../views/homePage/homePage';
import AboutPage from '../views/aboutPage/aboutPage';
import ServicesPage from '../views/servicesPage/servicesPage';
import TeamPage from '../views/teamPage/teamPage';
import ContactPage from '../views/contactPage/contactPage';
import EventPage from '../views/eventsPage/eventsPage';
import Header from '../components/header/header';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/events" component={EventPage} />
    </Switch>
  </Router>
);

export default Routes;
