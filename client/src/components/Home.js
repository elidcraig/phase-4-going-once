import React, { useEffect } from 'react'
import AuctionCard from './AuctionCard'
import { useRecoilValue, useRecoilState } from 'recoil'
import { highestBidItemState } from '../state/CardState'

function Home() {


// const [mostBids, setMostBids] = useRecoilState(detailsState)
// setMostBids(most_bids)

const [highestBidItem, setHighestBidItem] = useRecoilState(highestBidItemState)


useEffect (() => {fetch ( '/home' )
.then(resp => {
  if (resp.ok) {
    resp.json().then(obj => setHighestBidItem(obj))
  } else {
    resp.json().then(errors => {
      console.error(errors)
    })
  }
})
}, [])

const displayItem = highestBidItem
console.log(displayItem)

// const mostBids = most_bids
// console.log(mostBids)


  return (
    <div>
      <h1>
        Welcome to Veilingen
      </h1>
      <p>
        Place your biddings.
      </p>

      <div>
        <AuctionCard key={highestBidItem.id} item={highestBidItem}/>
      </div>




    </div>
  )
}

export default Home