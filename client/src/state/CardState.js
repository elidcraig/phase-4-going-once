import { atom, selector } from 'recoil'
import { searchState } from './SearchState'
import { categoryState } from './CategoryState'

export const detailsState = atom ({
    key: "detailsState",
    default: ''
})

export const itemsState = atom({ 
    key: "itemsState",
    default: []
})

export const highestBidItemState = atom({ 
    key: "highestBidItemState",
    default: ''
})

const openItemsState = selector({
    key: 'openItems',
    get: ({get}) => {
        const currentTime = new Date()
        const allItems = get(itemsState)
        return allItems.filter(item => currentTime <= new Date(item.closing_time))
    }
})

const itemsByNameState = selector({
    key: 'itemsByName',
    get: ({get}) => {
        const openItems = get(openItemsState)
        const search = get(searchState)
        return openItems.filter(item => {
            if(search === '') {
                return true
            } else{
                return item.name.toLowerCase().includes(search.toLowerCase())
            }
        })
    }
})

export const itemsByNameAndCatState = selector({
    key: 'itemsByNameAndCat',
    get: ({get}) => {
        const itemsByName = get(itemsByNameState)
        const category = get(categoryState)
        return itemsByName.filter(item => {
            if(category === 'All') {
                return true
            } else {
                return item.category === category
            }
        })
    }
})
