import React from 'react';

const Offer = ({of}) => {
    const {img, name,title}= of
    return (
        <div className='p-3'>
            <img src={img} alt=""   className='text-center m-auto' />
            <h1 className='text-center p-3 text-2xl font-bold'>{name}</h1>
            <h1 className='text-center p-3 text-xl'>{title}</h1>
        </div>
    );
};

export default Offer;