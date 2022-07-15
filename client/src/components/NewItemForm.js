import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { newItemState } from '../state/NewItemState'
import { currentUserState } from '../state/CurrentUserState'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

function NewItemForm() {

    const currentUserId = useRecoilValue(currentUserState)
    let navigate = useNavigate()
    
    const [newItem, setNewItem] = useRecoilState(newItemState)
    const resetForm = useResetRecoilState(newItemState)
    if (currentUserId === null) {
      return <p>Loading...</p>;
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
        const postItem = {
            user_id: currentUserId,
            name: newItem.name,
            description: newItem.description,
            image_url: newItem.image_url,
            starting_bid: newItem.starting_bid,
            starting_time: new Date(newItem.starting_time),
            closing_time: new Date(newItem.closing_time),
            category: newItem.category
        }

        console.log(postItem)
    
        const config = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postItem)
            }
        
        fetch("/items", config)
        .then(resp => {
            if (resp.ok) {
              resp.json().then(() => {
                resetForm()
                navigate('/dashboard', { replace: true })
              })
            } 
            else 
            {
              resp.json().then(errors => {
                console.error(errors)
              })
            }
        })
    }
        

    const handleChange = (event) => {
        setNewItem({
            ...newItem,
            [event.target.name]:event.target.value
        })
    }

    const selectCategory = ["", "Digital Art", "Metal Sculpture", "Oil Painting", "Sketch", "Stone Sculpture", "Woodwork", "Other" ]
return (
    // <div>
    //     <h2> Add New Item to Auction </h2>        
    //     <form onSubmit={handleSubmit}>
    //         Name:
    //         <input name="name" className="form-title" value={newItem.name} onChange={handleChange} placeholder='Name: '/><br/><br/>
    //         Description:
    //         <input name="description" className="form-description" value={newItem.description} onChange={handleChange} placeholder="Description:" /><br/><br/>
    //         Image:
    //         <input name="image_url" className="form-image" value={newItem.image_url} onChange={handleChange} placeholder="Link to Image:" /><br/><br/>
    //         Starting Bid:
    //         <input name="starting_bid" className="form-starting-bid" value={newItem.starting_bid} onChange={handleChange} placeholder="Starting Bid:" /><br/><br/>
    //         Start the Bidding:
    //         <input name="starting_time" className="form-starting-time" value={newItem.starting_time} onChange={handleChange} placeholder="Starting Date and Time:" /><br/><br/>            
    //         Close the Bidding:
    //         <input name="closing_time" className='form-closing-time' value={newItem.closing_time} onChange={handleChange} placeholder='Closing Date and Time:' /><br/><br/>
    //         <select name="category" onChange={handleChange} value={newItem.category}>
    //             {selectCategory.map(category => <option value={category} key={category}> {category}</option>)}
    //         </select>
            
    //         <input className="form-button" type="submit" value="Submit"/>
    //     </form>   
    // </div>
<div>
    <h2> Add New Item to Auction </h2>    
    <Box
    component="form"
    sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >

    <div onChange={handleChange}>
        <TextField
          required
          id="standard-required"
          label="Name"
          variant="standard"
          name="name"
          value={newItem.name}
        />

        <TextField
          required
          id="standard-required"
          label="Description"
          variant="standard"
          name="description"
          value={newItem.description}
        />

        <TextField
          required
          id="standard-required"
          label="Image"
          variant="standard"
          name="image_url"
          value={newItem.image_url}
        />

        <TextField
          required
          id="standard-required"
          label="Starting Bid"
          variant="standard"
          name="starting_bid"
          value={newItem.starting_bid}
        />
        <br/>
      </div>
      <br/>
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={newItem.category}
          onChange={handleChange}
          label="Category"
          name="category"
        >
          {selectCategory.map(category => <MenuItem value={category} key={category}> {category}</MenuItem>)}
        </Select>
        <br/><br/>
      <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
)
}

export default NewItemForm