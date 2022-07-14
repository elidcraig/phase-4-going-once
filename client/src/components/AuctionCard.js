import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { detailsState} from '../state/CardState'
import Timer from './Timer'


function AuctionCard({item}) {

const [details, setDetails] = useRecoilState(detailsState)


const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, highest_current_bid} = item

const active = new Date (starting_time) - Date.now()

    const handleClick = () => {
        setDetails(item)
    }

return (
    <div className="auction-card">
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <h2 name={id} style={{cursor:"pointer"}} onClick={handleClick}> {name}</h2>
        </Link>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <img src={image_url} alt={name} name={id} className="auction-image" style={{cursor:"pointer"}} onClick={handleClick}/>
        </Link>
        <div className="item-details-section">
        <p className="item-description">
            { description }
        </p>
        </div>
        <div className="bid-details" >
            <p>$ { highest_current_bid } </p>
        </div>
        <div className="bid-timer" >
        {active<=0 ? <p>Remaining Time: <Timer start={starting_time} end={closing_time} /></p> : <p>This auction has not started</p>}
        </div>
    </div>
)
}

export default AuctionCard