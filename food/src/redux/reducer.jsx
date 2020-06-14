import {ORDER,ADDDISH, DELETEITEM,ADDITEM} from "./actionTypes";
import data from '../components/data.json'

const initState = {
    value:0,
    order:[],
    dishes :[...data]
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
                var ord = state.dishes.find(ele => ele.id===Number(action.payload));
                console.log(ord);
            return {
                ...state,
                order : [...state.order,ord]
            }
            case DELETEITEM:
            console.log(action.payload);
            var arr = state.order.filter(item=>{
                return item.id!==Number(action.payload)
            })
            console.log(arr);

            return {
                ...state,
                order : arr
            }
            default :
            return state;
    }
}

export default reducer;