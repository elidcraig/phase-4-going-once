import { React, useEffect } from 'react';
import AuctionCard from './AuctionCard'
import { useRecoilState } from 'recoil'
import { itemsState } from '../state/CardState'


function AuctionContainer () {

    const [items, setItems] = useRecoilState(itemsState)

    useEffect (() => {fetch ( '/items' )
    .then ( (r) => r.json() )
    .then ( setItems )
    }, [])

    const itemDisplay = items.map((item) => <AuctionCard key={item.id} {...item}/>)
    
    return (
        <div className = "item-display">
            { itemDisplay }
        </div>
)
}

export default AuctionContainer