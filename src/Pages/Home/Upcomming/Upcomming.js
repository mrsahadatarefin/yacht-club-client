import React from 'react';
import img1 from '../../../assets/upcomming/img-1.jpg'
import img2 from '../../../assets/upcomming/img-2.jpg'
import img3 from '../../../assets/upcomming/img-3.jpg'
import img4 from '../../../assets/upcomming/img-4.jpg'
import UpComing from './UpComing/UpComing';

const Upcomming = () => {
    const upcomingRoute = [
        {
        name:"Venezia – Italy",
        date:'29.11.2023 - 06.12.2024',
        dis:'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        price:'199',
        img:img1    
    },
        {
        name:"Oslo – Norway"
       ,
        date:'29.11.2023 - 06.12.2024',
        dis:'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        price:'499',
        img:img2    
    },
        {
        name:"Hamburg – Germany",
        
        date:'29.11.2023 - 06.12.2024',
        dis:'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        price:'199',
        img:img3   
    },
        {
        name:" Stockholm – Swede",
      
        date:'29.11.2023 - 06.12.2024',
        dis:'Maecenas augue nibh, congue ut ante id, tempus vestibulum sem. Praesent interdum leo sit amet sapien porta interdum.',
        price:'599',
        img:img4    
    },

]
    return (
        <div className='mt-20   max-w-[1440px] m-auto  '>
            <div className='grid gap-5'>
                <h1 className='text-[#125294] italic text-xl font-semibold text-center '>Travel with us</h1>
                <p className='text-4xl text-black-700 font-bold text-center '>Upcoming routes</p>
            </div>
            <div className='grid gap-5 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-2 mt-10 bg-sky-100'>
    {
        upcomingRoute.map(up =><UpComing key={up.price} up={up}></UpComing>  )
    }

            </div>
        </div>
    );
};

export default Upcomming;