import React from 'react';

import img1 from '../../../assets/upcomming/sailor_01.jpg'
import img2 from '../../../assets/upcomming/sailor_02.jpg'
import img3 from '../../../assets/upcomming/sailor_03.jpg'
import Team from './Team/Team';

const Teams = () => {
    const teams = [
        {
     img:img1,
     name:"John Portman",
     rank: "Team manager",
     
    },
        {
     img:img2,
     name:"Kelley Miles",
      
     rank: "Cook"
     
    },
        {
     img:img3,
     name:"Sherman Warner",
     
     rank: "Yacht capitan"
     
    },
    
] 

    return (
        <div className='mt-20'>
            <div> <p className='text-xl font-bold text-center italic text-[#cebd88]'>sailors</p>
                <h1 className='text-6xl font-bold text-center'>Meet our team</h1>
                
            </div>
     <div className='grid gap-20 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
    {teams.map(te => <Team key={te.name} te={te}> </Team>)}
     </div>
        </div>
    );
};

export default Teams;