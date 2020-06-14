import {ORDERLESS,ORDERMORE,ADDDISH,ADDITEM,DELETEITEM,RESTAURANT,ITEMSEARCH} from './actionTypes';

export const ordermore = (payload)=>({
    type:ORDERMORE,
    payload
})

export const orderless = (payload)=>({
    type:ORDERLESS,
    payload
})

export const adddish = (payload)=>({
    type:ADDDISH,
    payload
})

export const additem = (payload)=>({
    type:ADDITEM,
    payload
})

export const deleteitem = (payload)=>({
    type:DELETEITEM,
    payload
})

export const restaurant = (payload)=>({
    type:RESTAURANT,
    payload
})

export const itemSearch = (payload)=>({
    type:ITEMSEARCH,
    payload
})