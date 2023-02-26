import React from 'react';
import AboutYacht from './AboutYacht/AboutYacht';

import Banner from './Banner/Banner';
import Logos from './logos/Logos';

import Services from './Services/Services';
import Teams from './teams/Teams';

import Upcomming from './Upcomming/Upcomming';
import WeOffer from './WeOffer/WeOffer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WeOffer></WeOffer>
         <AboutYacht></AboutYacht>
           <Services></Services>
           
           <Upcomming></Upcomming>
           <Logos></Logos>
           
           <Teams></Teams>
          
        </div>
    );
};

export default Home;