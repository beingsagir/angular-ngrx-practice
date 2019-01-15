import * as fromPizzas from '../actions/pizzas.action';
import {Pizza} from '../../models/pizza.model';


interface PizzaState  {
    data: Pizza[],
    loaded: boolean,
    loading: boolean
}

export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer (
    state: initialState,
//     action: fromPizzas.PizzaAction
// ): PizzaState {
//     switch(action.type){
//         case fromPizzas.LoadPizzas: {
//             return{

//             };
//         }
//     }
    return state;
}
