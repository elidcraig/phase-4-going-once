import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailsState } from '../state/CardState'
import { currentFullUserState } from '../state/CurrentUserState'


function AuctionCard({item}) {

const [details, setDetails] = useRecoilState(detailsState)
const currentUser = useRecoilValue(currentFullUserState)

const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, user} = item

const userOwnsItem = currentUser.id === user.id

const handleClick = () => {
    setDetails(item)
}

return (
    <div className="card">
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <h2 name={id} onClick={handleClick}> {name}</h2>
        </Link>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <img src={image_url} alt={name} name={id} className="item-picture" style={{cursor:"pointer"}} onClick={handleClick}/>
        </Link>
        <div className="item-details-section">
        <p className="item-description">
            { description }
        </p>
        </div>
        <div className="bid-details" >
            <p>$ { starting_bid } </p>
        </div>
        <div className="bid-timer" >
            <p> { /*closing_time - starting_time*/ }</p>
        </div>
        <button style={userOwnsItem ? {display: 'none'} : {}}>Make A Bid!</button>
    </div>
)
}

export default AuctionCard