import React, {useState, useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
// import { editItemState } from '../state/EditItemState'
import { currentUserState } from '../state/CurrentUserState'

function EditItemForm() {

    const currentUserId = useRecoilValue(currentUserState)
    let navigate = useNavigate()
    let { itemId } = useParams();
    const [editedItem, setEditedItem] = useState(null)
    // const resetForm = useResetRecoilState({ user_id: '', name: '', description: '', image_url: '', starting_bid: '', starting_time: '', closing_time: '', category: '' })
    console.log(itemId)
    useEffect(() => {
      fetch(`/items/${itemId}`)
      .then(res => {
        if (res.ok) {
          res.json().then(setEditedItem)
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
    }, [])
    
    
    if (itemId === undefined) {return <h1>Loading1...</h1>}

    if (currentUserId === null) {
      return <p>Loading2...</p>;
    }
    if (editedItem === null) {
      return <p>Loading3...</p>;
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
          
        const config = {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(editedItem)
            }

        fetch(`/items/${itemId}`, config)
        .then(resp => resp.json())
        .then(navigate('/dashboard', { replace: true }))
      //   (newlyEditedItem) => {
      //     // setEditedItem(newlyEditedItem)
      //     // resetForm()
      //     navigate('/dashboard', { replace: true })
      // }
    }

    const updateFormData = (event) => {
        setEditedItem({
            ...editedItem,
            [event.target.name]:event.target.value
        })
    }

    const selectCategory = [ "", "Digital Art", "Metal Sculpture", "Oil Painting", "Sketch", "Stone Sculpture", "Woodwork", "Other" ]
return (
    <div>
        <h2> Add New Item to Auction </h2>        
        <form onSubmit={handleSubmit}>
            Name:
            <input name="name" className="form-title" value={editedItem.name} onChange={updateFormData} placeholder='Name: '/><br/><br/>
            Description:
            <input name="description" className="form-description" value={editedItem.description} onChange={updateFormData} placeholder="Description:" /><br/><br/>
            Image:
            <input name="image_url" className="form-image" value={editedItem.image_url} onChange={updateFormData} placeholder="Link to Image:" /><br/><br/>
            Starting Bid:
            <input name="starting_bid" className="form-starting-bid" value={editedItem.starting_bid} onChange={updateFormData} placeholder="Starting Bid:" /><br/><br/>
            Start the Bidding:
            <input name="starting_time" className="form-starting-time" value={editedItem.starting_time} onChange={updateFormData} placeholder="Starting Date and Time:" /><br/><br/>
            <input name="closing_time" className='form-closing-time' value={editedItem.closing_time} onChange={updateFormData} placeholder='Closing Date and Time:' /><br/><br/>            
            <select  name="category" value={editedItem.category} onChange={updateFormData}>
                {selectCategory.map(category => <option value={category} key={category}> {category}</option>)}
            </select>
            
            <input className="form-button" type="submit" value="Submit"/>
        </form>
    </div>
)
}

export default EditItemForm