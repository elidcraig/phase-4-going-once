import { React, useEffect } from 'react';
import AuctionCard from './AuctionCard'
import { useRecoilState } from 'recoil'
import { itemsState } from '../state/CardState'


function AuctionContainer () {

    const [items, setItems] = useRecoilState(itemsState)

    useEffect (() => {fetch ( '/items' )
    .then(res => {
      if (res.ok) {
        res.json().then(setItems)
      } else {
        res.json().then(errors => {
          console.error(errors)
        })
      }
    })
    }, [])

    const itemDisplay = items.map((item) => <AuctionCard key={item.id} item={item}/>)
    
    return (
        <div className = "item-display">
            { itemDisplay }
        </div>
)
}

export default AuctionContainer