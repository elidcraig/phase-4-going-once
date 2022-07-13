import { atom } from 'recoil'

export const itemsState = atom ({ 
    key: "itemsState",
    default: []
});

export const detailsState = atom ({
    key: "detailsState",
    default: ''
});
