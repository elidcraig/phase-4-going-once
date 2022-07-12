import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { newItemState } from './state/NewItemState'
import { cardState } from './state/CardState'

function NewItemForm() {

    const initialItem = {
        user_id: '',
        name: '',
        description: '',
        image_url: '',
        starting_bid: '',
        starting_tiime: '',
        closing_time: '',
        category: ''
        }

    const [newItem, setNewItem] = useRecoilState(newItemState)
        
    const handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            user_id: newItem.user_id,
            name: newItem.name,
            description: newItem.description,
            image_url: newItem.image_url,
            starting_bid: newItem.starting_bid,
            starting_time: newItem.starting_time,
            closing_time: newItem.closing_time,
            category: newItem.category
        }
    
    const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        }
    
    fetch("http://localhost:5432", config)
    .then(resp => resp.json())
    .then((newItem) => {addItem(newItem)
    setNewItem(initialItem)})
    }

    const handleChange = (event) => {
        setNewItem({
            ...newItem,
            [event.target.name]:event.target.value
        })
    }

    const selectCategory = ["Digital Art", "Metal Sculpture", "Oil Painting", "Sketch", "Stone Sculpture", "Woodwork" ]
return (
    <div>
        <h2> Add New Item to Auction </h2>        
        <form onSubmit={handleSubmit}>
            Name:
            <input name="name" class="form-title" value={newItem.name} onChange={handleChange} placeholder='Name: '/><br/><br/>
            Description:
            <input name="description" class="form-description" value={newItem.description} onChange={handleChange} placeholder="Description:" /><br/><br/>
            Image:
            <input name="image_url" class="form-image" value={newItem.image_url} onChange={handleChange} placeholder="Link to Image:" /><br/><br/>
            Starting Bid:
            <input name="starting_bid" class="form-starting-bid" value={newItem.starting_bid} onChange={handleChange} placeholder="Starting Bid:" /><br/><br/>
            Start the Bidding:
            <input name="starting_time" class="form-starting-time" value={newItem.starting_time} onChange={handleChange} placeholder="Starting Date and Time:" /><br/><br/>            
            
            <select  name="category" onChange={handleChange}>
                {selectCategory.map(category => <option value={category}> {category}</option>)}
            </select>
            
            <input className="form-button" type="submit" value="Submit"/>
        </form>   
    </div>
)
}

export default NewItemForm