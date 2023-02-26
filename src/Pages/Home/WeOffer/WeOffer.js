import React from 'react';
import img1 from '../../../assets/offers/img1.svg'
import img2 from '../../../assets/offers/img2.svg'
import img3 from '../../../assets/offers/img-3.svg'
import img4 from '../../../assets/offers/img-4.svg'
import Offer from './Offer';

const WeOffer = () => {

    const offers = [
        {
            img:img1,
            name:'Explore',
            title:'Globalia Yachting delivers a dreamy sailing holiday in Cyprus on a bareboat yacht charter.'
        },
        {
            img:img2,
            name:'Book It',
            title:'Globalia Yachting delivers a dreamy sailing holiday in Cyprus on a bareboat yacht charter.'
        },
        {
            img:img3,
            name:'Enjoy',
            title:'Globalia Yachting delivers a dreamy sailing holiday in Cyprus on a bareboat yacht charter.'
        },
        {
            img:img4,
            name:'Special Events',
            title:'Globalia Yachting delivers a dreamy sailing holiday in Cyprus on a bareboat yacht charter.'
        },
    ]
    return (
        <div className='max-w-[1440px]  m-auto mt-20'>
            <div className='grid gap-5'>
                
                <p className='text-4xl text-black-700 font-bold text-center text-[#125294]  italic font-semibold '>What We Offer</p>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 justify-items-center '>


           {
            offers.map(of=><Offer key={of.name} of={of} ></Offer>)
           }
            </div>
        </div>
    );
};

export default WeOffer;