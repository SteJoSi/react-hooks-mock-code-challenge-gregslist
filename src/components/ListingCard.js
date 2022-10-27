import React, { useState } from "react";

function ListingCard({ listing }) {
  const [starClick, setStarClick] = useState(false)

  function handleStarClick() {
    setStarClick((starClick) => !starClick)
  }

  const activeStar= <button className="emoji-button favorite active">★</button>
  const deactivateStar= <button className="emoji-button favorite">☆</button>
  
  {/* {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )} */}

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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
