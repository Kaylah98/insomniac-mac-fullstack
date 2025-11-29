import { FoodData } from "./food-data-model";

export class Cart {
    id: string;
    foodCart: Set<FoodData>;
    subtotal: number;
    totalCost: number;

    constructor(id: string, foodCart: Set<FoodData>, subtotal: number, totalCost: number) {
        this.id = id;
        this.foodCart = foodCart;
        this.subtotal = subtotal;
        this.totalCost = totalCost;
    }


}