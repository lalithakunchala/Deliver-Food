import {ORDERLESS,ORDERMORE,ADDDISH,ADDITEM,DELETEITEM,RESTAURANT,ITEMSEARCH,ISAUTH,ISADMIN,USERNAME,USERPASSWORD,SET_FORMVALUES,SUBMIT_FORM} from './actionTypes';

export const username = (payload)=>({
    type:USERNAME,
    payload
})

export const userpassword = (payload)=>({
    type:USERPASSWORD,
    payload
})

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

export const isAuth = (payload)=>({
    
    type:ISAUTH,
    payload
})

export const additem = (payload)=>(
    payload.preventDefault(),
    
    {
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

export const isAdmin = (payload)=>({
    type:ISADMIN,
    payload
})