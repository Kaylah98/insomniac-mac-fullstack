import { Component } from '@angular/core';
import { MenuItemService } from '../services/menu-item-service';
import { MenuItem } from '../models/menu-item-model';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { CartService } from '../services/cart-service';
import { FoodData } from '../models/food-data-model';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../services/alert-service';


@Component({
  selector: 'app-menu-item-component',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './menu-item-component.html',
  styleUrl: './menu-item-component.css'
})
export class MenuItemComponent {

  foodItem!: MenuItem;
  foodData = new FoodData("", "", "", 0.00, "", 1);

  constructor(public menuItemService: MenuItemService, public cartService: CartService, private router: Router,
    public alertService: AlertService
  ) { }

  ngOnInit() {
    this.foodItem = this.menuItemService.menuObj();
  }

  // sets foodData and sends to service class to be added to cart
  addToCart() {
    this.foodData.id = this.foodItem.id;
    this.foodData.foodName = this.foodItem.foodName;
    this.foodData.foodPrice = this.foodItem.foodPrice;
    this.foodData.foodPic = this.foodItem.foodPic;
    this.cartService.addFoodToCart(this.foodData);
    this.alertService.success(this.foodData.foodName + " successfully added!", 2000);
    

  }

  // signals to cartService to begin ordering
  beginOrder() {
    this.cartService.startOrdering();
  }

}
