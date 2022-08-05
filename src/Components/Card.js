import React from 'react';
import './data';
import location from "../images/Fill 220location.png";

export default function Card(props){
    
    return(
        <div className="container">
            <div>
                <img src={props.imageUrl} alt="" className="card--image"></img>
            </div>
            <div className='card--text'>
                <div className="card--line1">
                    <span><img src={location} alt="" className='card--location'></img></span>
                    <span className='card--country'>{props.location}</span>
                    <span><a href={props.googleMapsUrl} className="card--link">View on Google Maps</a></span>
                </div>
                <div className="card--line2">
                    <h1>{props.title}</h1>
                </div>
                <div className="card--line3">
                    <h5>{props.startDate}-{props.endDate}</h5>
                </div>
                <div>
                    <p className='card--description'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}