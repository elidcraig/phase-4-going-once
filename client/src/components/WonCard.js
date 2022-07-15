import React from 'react';

function WonCard({ item }) {
  const { name, image_url, highest_current_bid } = item

  return (
    <div className='auction-card'>
      <h2>{ name }</h2>
      <img src={image_url} alt={name} className='auction-image'/>
      <div className='item-details-section'>
        <p>You Won This Auction!</p>
        <p>Final Bid Amount: $ {highest_current_bid}</p>
      </div>
    </div>
  );
}

export default WonCard;