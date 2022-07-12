import React from 'react'
import { useRecoilValue } from 'recoil'

import { itemsState } from './state/CardState'

function AuctionCard () {

const cardDetails = useRecoilValue(itemsState)

return (
    <div className="card">
    <Link to="/details" style={{ textDecoration: 'none' }}>
    <h2 name={cardDetails.id}> {cardDetails.name}</h2>
    </Link>
    <Link to="/details" style={{ textDecoration: 'none' }}>
    <img src={cardDetails.image_url} alt={cardDetails.name} name={cardDetails.id} className="item-picture" style={{cursor:"pointer"}}/>
    </Link>
    <div className="item-details-section">
    <p className="item-description">
        { cardDetails.description }
    </p>
    </div>
    <div class Name="bid-details" >
        <p> { cardDetails.starting_bid } </p>
    </div>
    <div className="bid-timer" >
        <p> { cardDetails.closing_time - cardDetails.starting_time }</p>
    </div>
</div>
)
}

export default AuctionCard