import * as customerActions from "./customer.actions";
import { Customer } from "../customer.model";
import * as fromRoot from "../../state/app-state"
import { Action } from 'rxjs/internal/scheduler/Action';
import { State } from '@ngrx/store';

export interface CustomerState{
    customers: Customer[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    customers: CustomerState
}

export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: "" 
}

export function customerReducer(
    state = initialState, 
    action: customerActions.Action
    ): CustomerState{
    state = initialState,
    action: customerActions.Action
}: CustomerState{
    switch(action.type){
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
            return{
                ...state,
                loading: true
            }
        }
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:{
            return{
                ...state,
                loading: false,
                loaded: true,
                customers: Action.payload
            }
        }
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:{
            return{
                ...state,
                loading: false,
                loaded: false,
                error: Action.payload
            }
        }
    }
}


//import { Action } from 'rxjs/internal/scheduler/Action';

// const initialState = {
//     customers: [
//         {
//             name: "Sagiruddin Mondal",
//             phone: "0000000000",
//             address: "kolkata",
//             membership: "Platinum",
//             id: 1
//         }
//     ],
//     loading: false,
//     loaded: true
// };

// export function customerReducer(state = initialState, action){
//     switch(action.type){
//         case "LOAD_CUSTOMER":{
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false
//             }
//         }

//         default: {
//             return state;
//         }
//     }
// }