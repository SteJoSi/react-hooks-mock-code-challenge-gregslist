import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listing, setListing] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => {
        // console.log('data', data)
        setListing(data)
      })
  }, [])

  // function handleDelete() {
  //   fetch(`http://localhost:6001/listings/${listing.id}`, {
  //     method: "DELETE",
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => console.log("deleted!"))
  // }
  // console.log("delete", listing)

  function handleDeleteListing(deletedListing) {
    // console.log("In ShoppingCart:", deletedItem)
    const updatedListing = listing.filter((listing) => listing.id !== deletedListing.id);
    setListing(updatedListing)
  }

  return (
    <main>
      <ul className="cards" key={listing.id}>
        {/* use the ListingCard component to display listings */}
        {listing.map((listings) => {
          return (
            <ListingCard listing={listings} onDeleteListing={handleDeleteListing} />
          )
        }
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
