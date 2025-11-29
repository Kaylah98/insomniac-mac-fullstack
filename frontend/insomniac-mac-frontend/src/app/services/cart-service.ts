// cart-service.ts

/* add, delete, update quantity of food to cart
   calculate cost of order
   create cart id
   start and stop ordering
    */

import { Injectable, signal } from '@angular/core';
import { Cart } from '../models/cart-model';
import { FoodData } from '../models/food-data-model';
import { AlertService } from './alert-service';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public alertService: AlertService) { }
  // customer's cart
  _foodCart = signal<Cart>(new Cart("", new Set<FoodData>, 0.00, 0.00))
  foodCart = this._foodCart.asReadonly();

  // changes button
  _beginOrder = signal<string>("Begin Ordering");
  beginOrder = this._beginOrder.asReadonly();

  // checks if customer is ordering
  _isOrdering = signal<boolean>(false);
  isOrdering = this._isOrdering.asReadonly();


  // creates a cart id for cart
  createCartId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // activates ordering
  startOrdering() {
    this._isOrdering.update(order => { return order = true; });
    console.log("this is ", this.isOrdering())
    // changes button to add to cart
    this._beginOrder.update(() => { return "Add to Cart" });
  }

  // stops the order
  stopOrdering() {
    this._foodCart.update((currentCart) => {
      currentCart.foodCart.clear();
      currentCart.subtotal = 0;
      currentCart.totalCost = 0;
      return currentCart
    });

    this._isOrdering.update(order => { return order = false });
    this._beginOrder.update(() => { return "Begin Order" });
  }

  // adds mac and cheese to cart
  addFoodToCart(foodData: FoodData) {


    this._foodCart.update(currentCart => {
      
      // turns food set into array for indexing
      const newFoodArr = Array.from(currentCart.foodCart);
      const foodObjIndex = newFoodArr.findIndex(food => food.id === foodData.id);
      const existingFood = newFoodArr[foodObjIndex];

      if (existingFood != null && existingFood.quantity + foodData.quantity > 10){
        this.alertService.fail("Quantity is more than 10. Please add less", 6000);
        return currentCart;
      }
      let newSet = new Set<FoodData>(currentCart.foodCart);
      const newCart = new Cart("", newSet, 0.00, 0.00);

      // if food object is not found
      if (foodObjIndex === -1) {
        newSet.add(foodData);
      }
      // if food object is found
      else {
        const updatedFood: FoodData = {
          ...existingFood,
          quantity: existingFood.quantity + foodData.quantity
        }

        newSet.delete(existingFood);
        newSet.add(updatedFood);
      }

      newCart.subtotal = this.calculateSubtotal(newCart);
      newCart.totalCost = this.calculateTotal(newCart);
      return newCart;
    })

  }

  // changes food quantity on order page
  changeFoodQuantity(quant: number, foodData: FoodData) {
    this._foodCart.update(currentCart => {
      
      // turns food set into array for indexing
      const newFoodArr = Array.from(currentCart.foodCart);
      const foodObjIndex = newFoodArr.findIndex(food => food.id === foodData.id);
      const existingFood = newFoodArr[foodObjIndex];
      let newSet = new Set<FoodData>(currentCart.foodCart);
      const newCart = new Cart("8a", newSet, 0.00, 0.00);

      // if food object is not found
      if (foodObjIndex === -1) {
        newSet.add(foodData);
      }
      // if food object is found
      else {
        const updatedFood: FoodData = {
          ...existingFood,
          quantity: quant
        }

        newSet.delete(existingFood);
        newSet.add(updatedFood);
      }

      newCart.subtotal = this.calculateSubtotal(newCart);
      newCart.totalCost = this.calculateTotal(newCart);
      return newCart;
    })
  }

  // deletes the entire dish from the cart
  deleteFoodFromCart(foodData: FoodData) {
    this._foodCart.update(currentCart => {

      currentCart.foodCart.delete(foodData);


      let newCart = new Cart(currentCart.id, new Set(currentCart.foodCart),
        this.calculateSubtotal(this.foodCart()), this.calculateTotal(this.foodCart()));
      return newCart;
    }
    )
  }

  // calculates the subtotal of the cart
  calculateSubtotal(cart: Cart): number {
    let subtotal = 0;

    for (const food of cart.foodCart) {
      console.log("price is: " + food.foodPrice + " food q is: " + food.quantity);
      subtotal = (food.foodPrice * food.quantity) + subtotal;
      console.log("subtotal is: " + subtotal)
    }



    return subtotal;
  }

  // calculates the total of the cart
  calculateTotal(cart: Cart): number {
    let total = this.calculateSubtotal(cart);
    let tax = 0.043;


    total = (total * tax) + total;

    console.log("total cost is: " + total)


    return total;
  }

}
