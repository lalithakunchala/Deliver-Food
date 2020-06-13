import {ORDER,ADDDISH, DELETEITEM} from "./actionTypes";
import data from '../data.json'

const initState = {
    value:0,
    order:[],
    dishes :data
}

export default reducer = (state=initState,action)=>{
    switch(action.type){
        case ORDER:
            return {
                ...state,
                value : state.value +1,
                order : [...order,action.payload]
            }

            case ADDDISH:
            return {
                ...state,
                dishes : [...state.dishes,action.payload]
            }
            case ADDITEM:
            return {
                ...state,
                order : [...state.order,action.payload]
            }
            case DELETEITEM:

            return {
                ...state,
                dishes : [...state.dishes,action.payload]
            }
            default :
            return state;
    }
}