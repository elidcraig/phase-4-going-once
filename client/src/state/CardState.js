import { atom, selector } from 'recoil'
import { searchState } from './SearchState'
import { categoryState } from './CategoryState'

export const itemsState = atom({ 
    key: "itemsState",
    default: []
});

// export const auctionState = atom ({
//     key: "auctionState",
//     default: ''
// });

const itemsByNameState = selector({
    key: 'itemsByName',
    get: ({get}) => {
        const allItems = get(itemsState)
        const search = get(searchState)
        return allItems.filter(item => {
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