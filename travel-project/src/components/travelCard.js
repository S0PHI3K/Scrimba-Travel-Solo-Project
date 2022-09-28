import React from 'react';
import pin from '../images/locationIcon.png'

export default function TravelCard (props) {
    return (
        <div className='travelCard'>
            <img src={`../../images/${props.imageUrl}`} alt='Mount Fuji' className='cardImg'/>
            <div className='travelInformation'>
                <div className='travelPlace'>
                <img src={pin} alt='Location Pin' className='locationPin' />
                <p className='travelLocation'>{props.location}</p>
                <p className='travelURL'><a href={props.googleMapsUrl} className='mapClick'>View on Google Maps</a></p>
                </div>            
            <h2 className='travelTitle'>{props.title}</h2>
                <div className='travelDates'>
                <p className='travelStart'>{props.startDate}</p>
                <p>  -  </p>
                <p className='travelEnd'>{props.endDate}</p>
                </div>
            <p className='travelDescription'>{props.description}</p>
            </div>
            <div className='line'>
            </div>
        </div>
    )
}