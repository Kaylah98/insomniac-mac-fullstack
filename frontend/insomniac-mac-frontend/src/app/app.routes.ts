import { Routes } from '@angular/router';
import { GetMenuComponent } from './get-menu-component/get-menu-component';
import { MenuItemComponent } from './menu-item-component/menu-item-component';
import { OrderComponent } from './order-component/order-component';
import { AboutUsComponent } from './about-us-component/about-us-component';
import { ResponseComponent } from './response-component/response-component';

export const routes: Routes = [
    { path: 'menu', component: GetMenuComponent},
    { path: 'menu-item', component: MenuItemComponent},
    { path: 'order', component: OrderComponent},
    { path: 'response-page', component: ResponseComponent},
    { path: 'about-us', component: AboutUsComponent}
];
