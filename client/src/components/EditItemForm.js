// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
// import { editItemState } from '../state/EditItemState'
// import { currentUserState } from '../state/CurrentUserState'

// function EditItemForm() {

//     const currentUserId = useRecoilValue(currentUserState)
//     let navigate = useNavigate()
    
//     const [editedItem, setEditedItem] = useRecoilState(editItemState)
//     const resetForm = useResetRecoilState(editItemState)
//     if (currentUserId === null) {
//       return <p>Loading...</p>;
//     }
        
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const patchItem = {
//             user_id: currentUserId,
//             name: editedItem.name,
//             description: editedItem.description,
//             image_url: editedItem.image_url,
//             starting_bid: editedItem.starting_bid,
//             starting_time: editedItem.starting_time,
//             closing_time: editedItem.closing_time,
//             category: editedItem.category
//         }

    
//         const config = {
//                 method: "PATCH",
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify(patchItem)
//             }
        
//         fetch(`items/${id}`, config)
//         .then(resp => resp.json())
//         .then((editedItem) => {
//             // addItem(editedItem)
//             resetForm()
//             navigate('/dashboard', { replace: true })
//         })
//     }

//     const handleChange = (event) => {
//         setEditedItem({
//             ...editedItem,
//             [event.target.name]:event.target.value
//         })
//     }

//     const selectCategory = ["Digital Art", "Metal Sculpture", "Oil Painting", "Sketch", "Stone Sculpture", "Woodwork" ]
// return (
//     <div>
//         <h2> Add New Item to Auction </h2>        
//         <form onSubmit={handleSubmit}>
//             Name:
//             <input name="name" className="form-title" value={editedItem.name} onChange={handleChange} placeholder='Name: '/><br/><br/>
//             Description:
//             <input name="description" className="form-description" value={editedItem.description} onChange={handleChange} placeholder="Description:" /><br/><br/>
//             Image:
//             <input name="image_url" className="form-image" value={editedItem.image_url} onChange={handleChange} placeholder="Link to Image:" /><br/><br/>
//             Starting Bid:
//             <input name="starting_bid" className="form-starting-bid" value={editedItem.starting_bid} onChange={handleChange} placeholder="Starting Bid:" /><br/><br/>
//             Start the Bidding:
//             <input name="starting_time" className="form-starting-time" value={editedItem.starting_time} onChange={handleChange} placeholder="Starting Date and Time:" /><br/><br/>            
            
//             <select  name="category" onChange={handleChange}>
//                 {selectCategory.map(category => <option value={category} key={category}> {category}</option>)}
//             </select>
            
//             <input className="form-button" type="submit" value="Submit"/>
//         </form>   
//     </div>
// )
// }

// export default EditItemForm