import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { itemsState } from '../state/CardState'

function AuctionCard({ name, id, image_url, description, starting_bid, closing_time, starting_time }) {

const setItems = useSetRecoilState(itemsState)

function deleteAuctionItem(deletedItem){
    const updatedAuctionItem = cardDetails.filter( auctionItem => auctionItem.id !== deletedItem.id)
    setItems(updatedAuctionItem)
    console.log(updatedAuctionItem)
}

function handleDelete() {
    fetch(`/items/${id}`, {
        method: "DELETE"
    })
    .then((r) => r.json())
    .then((deletedItem) => deleteAuctionItem(deletedItem))
}

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