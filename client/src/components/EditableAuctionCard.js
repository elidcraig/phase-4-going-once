import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

// import { itemsState } from '../state/CardState'
import { isNotLiveState } from "../state/IsLiveState";

function EditableAuctionCard({ item }) {
	const {
		name, id, image_url, description, starting_bid, closing_time, starting_time } = item;

	// const itemList = useRecoilValue(itemsState)
	// const setItems = useSetRecoilState(itemsState)

	const notLiveItems = useRecoilValue(isNotLiveState);
	const setNotLiveItems = useSetRecoilState(isNotLiveState);

	function deleteAuctionItem() {
		// const updatedMainItemList = itemList.filter( auctionItem => auctionItem.id !== id)
		// setItems(updatedMainItemList)
		// console.log(updatedMainItemList)

		const updatedUserItemList = notLiveItems.filter(
			(auctionItem) => auctionItem.id !== id
		);
		setNotLiveItems(updatedUserItemList);
		console.log(updatedUserItemList);
	}

	function handleDelete() {
		fetch(`/items/${id}`, {
			method: "DELETE",
		}).then((res) =>
			res.ok
				? res.json().then(deleteAuctionItem(id))
				: res.json().then((errors) => console.error(errors))
		);
	}

	return (
		<div className="card">
			<Link to="/details" style={{ textDecoration: "none" }}>
				<h2 name={id}> {name}</h2>
			</Link>
			<Link to="/details" style={{ textDecoration: "none" }}>
				<img
					src={image_url}
					alt={name}
					name={id}
					className="item-picture"
					style={{ cursor: "pointer" }}
				/>
			</Link>
			<div className="item-details-section">
				<p className="item-description">{description}</p>
			</div>
			<div class Name="bid-details">
				<p>$ {starting_bid} </p>
			</div>
			{/* <button onClick={handleEdit}>Edit</button> */}
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default EditableAuctionCard;
