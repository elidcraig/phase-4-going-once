import React from 'react'
import { useRecoilValue } from 'recoil'
import { detailsState } from '../state/CardState'

function Details() {

const item = useRecoilValue(detailsState)
const {name, id, image_url, description, category, starting_bid, closing_time, starting_time} = item


    //if(isLive) {
    return (
    <div className = "profile">
        <h2>{name}</h2>
        <img src={image_url} alt={name}/>
        <ul className="first-profile-ul">
            <li><strong>Description:</strong> {description}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Current Bid:</strong> {starting_bid}</li>
            <li><strong>Bidding Ends On:</strong> {closing_time}</li>
        </ul>
    </div>
  //)}
  //else {
  //    return (<h1>This Auction is not live!</h1>)
  //}
    )
}

export default Details