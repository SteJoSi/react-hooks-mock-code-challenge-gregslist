import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listing, setListing] = useState([])

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => {
        console.log('data', data)
        setListing(data)
      })
  }, [])

  return (
    <main>
      <ul className="cards" key={listing.id}>
        {/* use the ListingCard component to display listings */}
        {listing.map((listings) => {
          return (
            <ListingCard listing={listings} />
          )
        }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
