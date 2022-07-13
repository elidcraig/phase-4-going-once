import React from 'react'
import { useRecoilState } from 'recoil'
import { categoryState } from '../state/CategoryState'
import { searchState } from '../state/SearchState'
import AuctionContainer from './AuctionContainer'

function Explore() {

  const [category, setCategory] = useRecoilState(categoryState)
  const [search, setSearch] = useRecoilState(searchState)

  const handleSearchChange = e => setSearch(e.target.value)
  const handleCategoryChange = e => setCategory(e.target.value)

  const selectCategory = ["All", "Digital Art", "Metal Sculpture", "Oil Painting", "Sketch", "Stone Sculpture", "Woodwork"]

  return (
    <div className='explore'>
      <input type='text' value={search} onChange={handleSearchChange}/>
      <select name='category' value={category} onChange={handleCategoryChange}>
        {selectCategory.map(category => <option value={category} key={category}>{category}</option>)}
      </select>
      <AuctionContainer/>
    </div>
  )
}

export default Explore

