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

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              name="starting_time"
              value={newItem.starting_time}
              onChange={newVal => setNewItem({ ...newItem, "starting_time": newVal })}
              variant="dialog"

              minDateTime={new Date()}

              />
              <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              name="closing_time"
              value={newItem.closing_time}
              onChange={newVal => setNewItem({ ...newItem, "closing_time": newVal })}
              variant="dialog"

              minDateTime={new Date()}

              />
            </LocalizationProvider>
      <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
)
}

export default NewItemForm