import React, { useEffect } from 'react'
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
const {name, id, image_url, description, category, starting_bid, closing_time, starting_time} = item

useEffect (() => {fetch ( `bids/${id}` )
  .then ( (r) => r.json() )
  .then ( bid => { 
    console.log(bid)
    setCurrentBid(bid)
  })
  }, [])

  const {user_id, item_id, amount} = currentBid


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
          resp.json().then(user => {
            resetForm()
            //navigate('/details', { replace: true })
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
    <div className = "profile">
        <h2>{name}</h2>
        <img src={image_url} alt={name}/>
        <ul className="first-profile-ul">
            <li><strong>Description:</strong> {description}</li>
            <li><strong>Category:</strong> {category}</li>
            <li><strong>Starting Bid:</strong> {starting_bid}</li>
            <li><strong>Current Bid:</strong> {amount}</li>
            <li><strong>Bidding Ends On:</strong> {closing_time}</li>
        </ul>
        <Timer start={starting_time} end={closing_time} />
        <label>Make your bid: </label>
        <button name="amount" value={newBid.amount} onChange={handleChange} onClick={handleSubmit}> {amount + (amount * .05)} </button>
        <button name="amount" value={newBid.amount} onChange={handleChange} onClick={handleSubmit}> {amount + (amount * .10)} </button>
        <button name="amount" value={newBid.amount} onChange={handleChange} onClick={handleSubmit}> {amount + (amount * .15)} </button>
        <form onSubmit={handleSubmit}>
            Custom Bid:
        <input name="amount" value={newBid.amount} placeholder="$$$" onChange={handleChange}/>
        <input className="form-button" type="submit" value="Submit"/>
        </form>
    </div>
  //)}
  //else {
  //    return (<h1>This Auction is not live!</h1>)
  //}
    )
}

export default Details