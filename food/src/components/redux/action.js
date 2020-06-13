import {ORDER,ADDDISH,ADDITEM,DELETEITEM} from './actionTypes';

export const order = (payload)=>{
    type:ORDER,
    payload
}

export const adddish = (payload)=>{
    type:ADDDISH,
    payload
}

export const additem = (payload)=>{
    type:ADDITEM,
    payload
}

export const deleteitem = (payload)=>{
    type:DELETEITEM,
    payload
}