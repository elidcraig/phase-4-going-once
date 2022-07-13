import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { itemsState } from '../state/CardState'

function AuctionCard({ name, id, image_url, description, starting_bid }) {

const setItems = useSetRecoilState(itemsState)

// function deleteAuctionItem(deletedItem){
//     const updatedAuctionItem = cardDetails.filter( auctionItem => auctionItem.id !== deletedItem.id)
//     setItems(updatedAuctionItem)
//     console.log(updatedAuctionItem)
// }

// function handleDelete() {
//     fetch(`/items/${id}`, {
//         method: "DELETE"
//     })
//     .then(res => {
//       if (res.ok) {
//         res.json().then((deletedItem) => {//deleteAuctionItem(deletedItem)

//       })
//       } else {
//         res.json().then(errors => {
//           console.error(errors)
//         })
//       }
//     })
// }

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
            <p>$ { starting_bid } </p>
        </div>
        {/* <button onClick={handleEdit}>Edit</button> */}
        {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
)
}

export default AuctionCard