import React from 'react';
import World from '../images/worldLogo.png'

export default function Banner () {
    return (
        <div className='banner'>
            <img src={World} alt='World' className='worldLogo' />
            <p className='bannerTitle'>my travel journal.</p>
        </div>
    )
}