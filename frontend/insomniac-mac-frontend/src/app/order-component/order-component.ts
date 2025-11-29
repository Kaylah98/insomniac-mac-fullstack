import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { OrderService } from '../services/order-service';
import { FoodData } from '../models/food-data-model';
import { Cart } from '../models/cart-model';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Customer } from '../models/customer-model';
import { FooterService } from '../services/footer-service';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert-service';


@Component({
  selector: 'app-order-component',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './order-component.html',
  styleUrl: './order-component.css'
})
export class OrderComponent {

  customer = new Customer(null!, "", "", "", { id: "", cart: [] });
  deactivateSubmit = false;
  showAlert = false;

  constructor(public cartService: CartService, public orderService: OrderService, public footerService: FooterService,
    public alertService: AlertService
  ) {

  }

  // updates quantity
  onQuantityChange(value: string, foodData: FoodData) {
    this.cartService.changeFoodQuantity(Number(value), foodData);
  }

  ngAfterViewInit() {
    this.footerService.moveFooterDown(-700);
  }

  // removes food from cart and updates alert
  deleteFoodFromCart(foodData: FoodData) {
    console.log("This is: ", foodData.foodName);
    this.cartService.deleteFoodFromCart(foodData);
    this.alertService.success(foodData.foodName + " has been deleted", 4000);
    this.showAlert = true;

  }

  // create order object and submit 
  submitOrder(form: NgForm, cart: Cart) {
    cart.id = this.cartService.createCartId();
    cart.subtotal = this.cartService.foodCart().subtotal;
    cart.totalCost = this.cartService.foodCart().totalCost;
    if (form.valid) {
      console.log(cart);
      this.orderService.submitOrder(cart, this.customer);

    }

  }

  // signals to cart service to stop ordering
  stopOrdering() {
    this.cartService.stopOrdering();
  }

}
