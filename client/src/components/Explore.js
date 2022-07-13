import React from 'react'
import { categoryState } from '../state/CategoryState'
import { searchState } from '../state/SearchState'
import AuctionContainer from './AuctionContainer'

function Explore() {
  return (
    <div className='explore'>
      <AuctionContainer/>
    </div>
  )
}

export default Explore

