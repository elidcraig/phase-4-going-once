import { atom } from 'recoil'

export const itemsState = atom ({ 
    key: "itemsState",
    default: []
});

export const auctionState = atom ({
    key: "auctionState",
    default: ''
});
