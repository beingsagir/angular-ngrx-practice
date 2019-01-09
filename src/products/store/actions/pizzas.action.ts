import {Action} from '@ngrx/store';

import 
// load pizza

export const LOAD_PIZZA = "[Products] Load Pizzas"
export const LOAD_PIZZA_FAIL = "[Products] Load Pizzas Fail"
export const LOAD_PIZZA_SUCCESS = "[Products] Load Pizzas Success"


export class LoadPizzas implements Action{
    readonly type = LOAD_PIZZA;
}

export class LoadPizzasFail implements Action{
    readonly type = LOAD_PIZZA_FAIL;
    constructor(public payload:any) {}
}

export class LoadPizzasSuccess implements Action{
    readonly type = LOAD_PIZZA_SUCCESS;
    constructor(public payload: Pizza[]){}
}