// order-service.ts

/* 
   submit order to back end
   create order id
   show data
    */

import { Injectable, signal } from '@angular/core';
import { Cart } from '../models/cart-model';
import { Order } from '../models/order-model';
import { Customer } from '../models/customer-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderResponse } from '../models/order-response-model';
import { CartService } from './cart-service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {


  res = signal<OrderResponse>({
    firstName: '', lastName: '',
    timeOfOrder: new Date,
    message: ''
  });
  constructor(private http: HttpClient, private router: Router, private cartService: CartService) { }

  // creates an order id
  private createOrderId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // where the HTTP POST request will go
  submitOrder(cart: Cart, customer: Customer): void {
    const foodC = Array.from(cart.foodCart)
    const order = new Order(this.createOrderId(), foodC);
    customer.order = order;
    console.log("Order on the way to being submitted...", order);
    this.http.post<OrderResponse>('http://localhost:8080/submit-order', customer).subscribe((response: OrderResponse) => {
      this.res.update((value) => {
        value = response;
        return value;
      })
      this.cartService.stopOrdering();
      this.router.navigate(['/response-page'])
    },
      (error: any) => {
        console.log("Could not get data", error);
      });
  }







}
