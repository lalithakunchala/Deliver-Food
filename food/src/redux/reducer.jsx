import {ORDERMORE,ADDDISH, DELETEITEM,ADDITEM,ORDERLESS,RESTAURANT,ITEMSEARCH,ISAUTH, ISADMIN,USERNAME,USERPASSWORD,SET_FORMVALUES,SUBMIT_FORM} from "./actionTypes";
import data from '../components/data.json'

const initState = {
    value:0,
    order:[],
    dishes :[...data],
    name :"",
    item :"",
    auth :false,
    admin :false,
    username:{},
    userpassword:""
}

const  reducer = (state=initState,action)=>{
    switch(action.type){
        case "SET_FORMVALUES":
            return {
              ...state,
              formValues: action.payload
            };
          case "SUBMIT_FORM":
            
            console.log("Form Data - ", state.formValues);
            return {
              ...state,
              username:state.formvalues
            };

        case USERNAME:
            console.log(action.payload)
                
            return {
                ...state,
                username : action.payload,
                
            }
            case USERPASSWORD:
            console.log(action.payload)
                
                
            return {
                ...state,
            userpassword : newarr,
                
            }
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

        //     "item":"chicken manchuriya",
        // "price":250,
        // "rating":4,
        // "id":18,
        // "quantity":1,
        // "costtwo":400,
        // "restaurant":"Taj",
        // "img":"https://i.imgur.com/JdRqOYCb.jpg"

            case ADDITEM:
                console.log(action.payload)
                var ord = state.dishes.find(ele => ele.id===Number(action.payload));
                ord = {...ord,total:Number(ord.price)*Number(ord.quantity)}
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

            case RESTAURANT:
            console.log(action.payload);

            return {
                ...state,
                name:action.payload
            }

            case ITEMSEARCH:
            console.log(action.payload);

            return {
                ...state,
                item:action.payload
            }

            case ISAUTH:
                
            console.log(action.payload)
            console.log(action.payload.password)
            if (action.payload.name === "lalitha" && action.payload.password === "lalitha") {
                return {
                    ...state,
                    auth:true
                }
              }
              else{
                alert("Enter correct details")
              }

              case ISADMIN:
            console.log(action.payload.name)
            console.log(action.payload.password)
            if (action.payload.name === "restaurant" && action.payload.password === "restaurant") {
                return {
                    ...state,
                    admin:true
                }
              }
              else{
                alert("Enter correct details")
              }


            default :
            return state;
    }
}

export default reducer;