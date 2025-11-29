import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item-model';
import { MenuItemService } from '../services/menu-item-service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-menu-component',
  imports: [CurrencyPipe],
  templateUrl: './get-menu-component.html',
  styleUrl: './get-menu-component.css'
})
export class GetMenuComponent {


  styleGap: string = '';

  menuItems: MenuItem[] = [];


  constructor(private menuItemService: MenuItemService,
    private router: Router) {
    this.menuItems = this.menuItemService.getMenuItems();
    this.styleGap = '90px';
  }

  // sets gap in between mac and cheese items
  setGap(newGap: number): string {
    return newGap + 'px';
  }

  // sets 4 mac and cheese items per row
  getChunks<T>(arr: T[], size = 4): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  trackByRow(index: number, _row: MenuItem[]) {
    return index;
  }

  trackByImage(_index: number, item: MenuItem) {
    return item.id;
  }

  get imageRows(): MenuItem[][] {
    return this.getChunks(this.menuItems, 4);
  }

  sendMenuItem(value: MenuItem) {
    this.menuItemService.changeMenuItem(value);
    this.router.navigate(['menu-item']);
  }
}
