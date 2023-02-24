import React from 'react';
import Banner from './Banner/Banner';

import Services from './Services/Services';
import Teams from './teams/Teams';
import Upcomming from './Upcomming/Upcomming';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Upcomming></Upcomming>
           
           <Teams></Teams>
        </div>
    );
};

export default Home;