import React from 'react'
import { Link } from 'react-router-dom'


function AuctionCard({ name, id, image_url, description, starting_bid, closing_time, starting_time }) {

return (
    <div className="card">
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <h2 name={id}> {name}</h2>
        </Link>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <img src={image_url} alt={name} name={id} className="item-picture" style={{cursor:"pointer"}}/>
        </Link>
        <div className="item-details-section">
        <p className="item-description">
            { description }
        </p>
        </div>
        <div class Name="bid-details" >
            <p> { starting_bid } </p>
        </div>
        <div className="bid-timer" >
            <p> { /*closing_time - starting_time*/ }</p>
        </div>
    </div>
)
}

export default AuctionCard