import {ORDER,ADDDISH, DELETEITEM,ADDITEM} from "./actionTypes";
import data from '../components/data.json'

const initState = {
    value:0,
    order:[],
    dishes :data
}

const  reducer = (state=initState,action)=>{
    switch(action.type){
        case ORDER:
            return {
                ...state,
                value : state.value +1,
                order : [...state.order,action.payload]
            }

            case ADDDISH:
            return {
                ...state,
                dishes : [...state.dishes,action.payload]
            }
            case ADDITEM:
                console.log(action.payload)
                var item = state.dishes.filter(ele=>{
                    return ele.id===action.payload
                })
                console.log(item);
            return {
                ...state,
                order : [...state.order,item]
            }
            case DELETEITEM:

            var arr = state.order.filter(item=>{
                return item.id!==action.payload
            })

            return {
                ...state,
                order : arr
            }
            default :
            return state;
    }
}

export default reducer;