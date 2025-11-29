// menu-item-service.ts

/* change menu item
    load menu items
    */


import { Injectable, signal, Signal } from '@angular/core';
import { MenuItem } from '../models/menu-item-model';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {


  // updates food when customer clicks on page
  _menuObj = signal<MenuItem>({ id: "", foodPic: "", foodName: "", foodPrice: 0.00, foodDesc: "", quantity: 0.00 });
  menuObj = this._menuObj;

  // changes the menu item for each page
  changeMenuItem(value: MenuItem) {
    this._menuObj.update(item => {
      return new MenuItem(value.id, value.foodPic, value.foodName, value.foodPrice,
        value.foodDesc, value.quantity)
    });
  }

  // loads menu items
  getMenuItems(): MenuItem[] {
    return [

      new MenuItem("1a", "/macandcheese.jpg", "Original Mac and Cheese",
        11.99, "The mac and cheese that started it all.", 1),

      new MenuItem("2b", "/baconmac.jpg", "Bacon Mac",
        12.99, "Creamy mac with crispy bacon.", 1),

      new MenuItem("3c", "/shrimpmacandcheese.jpg", "Shrimp Mac and Cheese",
        15.99, "Creamy mac and cheese with lucious shrimp.", 1),

      new MenuItem("4d", "/hammacandcheese.jpg", "Ham Mac and Cheese",
        13.50, "Creamy mac and cheese with chunks of ham.", 1),

      new MenuItem("5e", "/sausagemacandcheese.jpg",
        "Sausage Mac and Cheese", 14.10,
        "Creamy mac and cheese with smoked sausage.", 1),

    ]
  }




}
