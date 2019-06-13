import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({type: 'LOAD_CUSTOMERS'})
    this.store.subscribe(state => (this.customers = state.customers.customers))
  }

}
