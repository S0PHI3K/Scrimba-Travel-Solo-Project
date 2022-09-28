import React from 'react';
import icon from '../images/mountFuji.jpg'
import pin from '../images/locationIcon.png'

export default function TravelCard () {
    return (
        <div className='travelCard'>
            <img src={icon} alt='Mount Fuji' className='cardImg'/>
            <div className='travelInformation'>
                <div className='travelPlace'>
                <img src={pin} alt='Location Pin' className='locationPin' />
                <p className='travelLocation'>JAPAN</p>
                <p className='travelURL'>view on Google Maps </p>
                </div>            
            <h2 className='travelTitle'>Mount Fuji</h2>
                <div className='travelDates'>
                <p className='travelStart'>12 Jan, 2021</p>
                <p>  -  </p>
                <p className='travelEnd'>24 Jan, 2021</p>
                </div>
            <p className='travelDescription'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            <div className='line'>
            </div>
        </div>
    )
}