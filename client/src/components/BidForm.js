import React from 'react';

function BidForm() {
  return (
    <>
      <form 
            className='new-bid-form'
            style={makingBid ? {} : {display: 'none'}}
            onSubmit={handleBidSubmit}
        >
            <input type="number" name='newBid' value={newBid} min={highest_current_bid + 1} onChange={handleBidChange}/>
            <input type="submit" />
        </form>
        <button 
            style={userOwnsItem || !biddingIsOpen ? {display: 'none'} : {}} onClick={handleOpenBidForm}
        >{makingBid ? 'Cancel Bid' : 'Make A Bid!'}</button>
    </>
  );
}

export default BidForm;