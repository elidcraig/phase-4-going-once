import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { useRecoilValue, useSetRecoilState } from 'recoil'

import { notLiveListState } from "../state/IsLiveState";

function EditableAuctionCard({ item }) {
	const { name, id, image_url, description, starting_bid, closing_time, starting_time } = item;
  let navigate = useNavigate()

const [notLiveItems, setNotLiveItems] = useRecoilState(notLiveListState)

    if (id === undefined) {return <h1>Loading...</h1>}

    function deleteAuctionItem() {
      const updatedUserItemList = notLiveItems.filter(
        (auctionItem) => auctionItem.id !== id
      );
      setNotLiveItems(updatedUserItemList);
      console.log(updatedUserItemList);
      navigate(`/dashboard`, { replace: true }) 
    }

	function handleDelete() {
		fetch(`/items/${id}`, {
			method: "DELETE",
		}).then((res) =>
			res.ok ? deleteAuctionItem() :
      res.json().then((errors) => console.error(errors))
		);
	}
const handleClickEdit = () => navigate(`/edit-item/${id}`, { replace: true })

return (
    <div className="card">
        <h2 name={id}> {name}</h2>
        <img src={image_url} alt={name} name={id} className="item-picture" style={{cursor:"pointer"}}/>
        <div className="item-details-section">
        <p className="item-description">
            { description }
        </p>
        </div>
        <div className="bid-details" >
            <p>$ { starting_bid } </p> {/*this will be replaced by the current winning bid */}
        </div>
        {/* <Link to={`/edit-item/${id}`} style={{ textDecoration: 'none' }}> */}
            <button onClick={handleClickEdit}>Edit</button>
        {/* </Link> */}
        <button onClick={handleDelete}>Delete</button>
    </div>
)
}

export default EditableAuctionCard;
