import { React, useEffect } from 'react';
import AuctionCard from './AuctionCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { itemsState, itemsByNameAndCatState } from '../state/CardState'


function AuctionContainer () {

    const [items, setItems] = useRecoilState(itemsState)
    const filteredItems = useRecoilValue(itemsByNameAndCatState)

    useEffect (() => {
        fetch ( '/items' )
        .then ( (r) => r.json() )
        .then ( setItems )
    }, [])

    const itemDisplay = filteredItems.map((item) => <AuctionCard key={item.id} {...item}/>)
    
    return (
        <div className = "item-display">
            { itemDisplay }
        </div>
)
}

export default AuctionContainer