import React from 'react';
import ClientSay from '../ClientSay/ClientSay';
import useTitle from '../Hooks/useTitle';
import AboutYacht from './AboutYacht/AboutYacht';

import Banner from './Banner/Banner';
import Logos from './logos/Logos';

import Services from './Services/Services';
import Teams from './teams/Teams';
import Testimonial from './testimonial/Testimonial';

import Upcomming from './Upcomming/Upcomming';
import WeOffer from './WeOffer/WeOffer';

const Home = () => {
  useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <WeOffer></WeOffer>
         <AboutYacht></AboutYacht>
           <Services></Services>
           
           <Upcomming></Upcomming>
           <Logos></Logos>
           
           <Teams></Teams>
           <ClientSay></ClientSay>
           <Testimonial></Testimonial>
          
        </div>
    );
};

export default Home;