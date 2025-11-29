import { FoodData } from "./food-data-model";

export class Order {
    id: string;
    cart: FoodData[];

    constructor(id: string, cart: FoodData[]){
        this.id = id;
        this.cart = cart;
    }
}