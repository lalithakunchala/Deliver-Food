import {ORDERMORE,ADDDISH, DELETEITEM,ADDITEM,ORDERLESS} from "./actionTypes";
import data from '../components/data.json'

const initState = {
    value:0,
    order:[],
    dishes :[...data]
}

const  reducer = (state=initState,action)=>{
    switch(action.type){
        case ORDERMORE:
            console.log(action.payload)
                
                var newarr = state.order.map(item=>(
                    Number(item.id)!==Number(action.payload)? item:{...item,quantity:Number(item.quantity)+1,total:Number(item.price)*Number(item.quantity+1)}
                ))
                console.log(newarr);
            return {
                ...state,
                order : newarr,
                
            }

            case ORDERLESS:
            console.log(action.payload)
                
                var newarr = state.order.map(item=>(
                    Number(item.id)!==Number(action.payload)? item:{...item,quantity:Number(item.quantity)-1,total:Number(item.price)*Number(item.quantity-1)}
                ))
                console.log(newarr);
            return {
                ...state,
                order : newarr,
                
            }

            case ADDDISH:
            return {
                ...state,
                dishes : [...state.dishes,action.payload]
            }
            case ADDITEM:
                console.log(action.payload)
                var ord = state.dishes.find(ele => ele.id===Number(action.payload));
                ord = {...ord,total:ord.price*ord.quantity}
                console.log(ord);
            return {
                ...state,
                order : [...state.order,ord],
                
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