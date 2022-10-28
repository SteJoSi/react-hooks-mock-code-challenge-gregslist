import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [starClick, setStarClick] = useState(false)

  function handleStarClick() {
    setStarClick((starClick) => !starClick)
  }

  const activeStar= <button className="emoji-button favorite active">★</button>
  const deactivateStar= <button className="emoji-button favorite">☆</button>


  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then((listing) => onDeleteListing(listing))
  }

  console.log("delete", listing)

  return (
    <li className="card" key={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details" onClick={handleStarClick}>
        {starClick ? activeStar : deactivateStar}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
