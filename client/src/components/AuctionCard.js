import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { detailsState} from '../state/CardState'
import Timer from './Timer'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function AuctionCard({item}) {

const [details, setDetails] = useRecoilState(detailsState)


const {name, id, image_url, description, category, starting_bid, closing_time, starting_time, highest_current_bid} = item

const active = new Date (starting_time) - Date.now()

    const handleClick = () => {
        setDetails(item)
    }

return (
    <div>
    <br/>
   
    <div className="auction-card">
        {/* <Link to="/details" style={{ textDecoration: 'none' }}>
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
        {active<=0 ? <Timer start={starting_time} end={closing_time} /> : <p>This auction has not started</p>}
        </div> */}


        <Card sx={{ maxWidth: 345, alignContent: "center"  }}>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <CardMedia
        component="img"
        height="250"
        image={image_url}
        alt={name}
        onClick={handleClick}
        />
        </Link>
        <CardContent>
        <Link to="/details" style={{ textDecoration: 'none' }}>
        <Typography gutterBottom variant="h5" component="div" onClick={handleClick}>
            {name}
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        
        <Typography variant="h6">$ {highest_current_bid}</Typography>
        <Typography variant="h6"> {active<=0 ? <Timer start={starting_time} end={closing_time} /> : <p>This auction has not started</p>}</Typography>
        </CardContent>
        </Card>
        </div>

        </div>
)
}

export default AuctionCard