import React, { useEffect } from 'react'
import { format } from 'date-fns'
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil'
import { detailsState } from '../state/CardState'
import { currentUserState } from '../state/CurrentUserState'
import { currentBidState, newBidState } from '../state/BidState'
import Timer from './Timer'

function Details() {

const item = useRecoilValue(detailsState)
const [currentBid, setCurrentBid] = useRecoilState(currentBidState)
const [newBid, setNewBid] = useRecoilState(newBidState)
const resetForm = useResetRecoilState(newBidState)
const currentUserId = useRecoilValue(currentUserState)
const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, highest_current_bid, user} = item

const active = new Date (starting_time) - Date.now()
const formatted_starting_time = format(new Date (starting_time), 'Ppp')
const formatted_closing_time = format(new Date (closing_time), 'Ppp')
useEffect (() => {
    console.log(highest_current_bid)
    setCurrentBid(highest_current_bid)
  }, [] )
  
const handleSubmit = (event) => {
    event.preventDefault()
    const postBid = {
        user_id: currentUserId,
        item_id: id,
        amount: newBid.amount
    }

    console.log(postBid)

    const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postBid)
        }
    
    fetch("/bids", config)
    .then(resp => {
        if (resp.ok) {
          resp.json().then(bid => {
            resetForm()
            setCurrentBid(bid.amount)
          })
        } 
        else 
        {
          resp.json().then(errors => {
            console.error(errors)
          })
        }
    })
}
      

const handleChange = (event) => {
    setNewBid({
        ...newBid,
        [event.target.name]:event.target.value
    })
}
    return (
    <div className = "details">
        <h2>{name}</h2>
        <img src={image_url} alt={name}/>
        <ul className="details-ul">
            <li><strong>Description:</strong> {description}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Starting Bid:</strong> {starting_bid}</li>
            <li><strong>Current Bid:</strong> {currentBid}</li>
            <li><strong>Bidding Ends On:</strong> {formatted_closing_time}</li>
        </ul>
        {active<=0 ? 
        <div><Timer start={starting_time} end={closing_time} />
            <label>Make your bid: </label>
            { currentUserId === user.id ? null :
            <form onSubmit={handleSubmit}>
                  <input name="amount" value={newBid.amount} placeholder="$$$" onChange={handleChange}/>
                  <input className="form-button" type="submit" value="Submit"/>
            </form>}
        </div>
        : <p>This auction will start at: {formatted_starting_time}</p>}
    </div>
    )
}

export default Details