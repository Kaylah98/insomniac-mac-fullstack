export class FoodData {
    id: string;
    foodPic: string;
    foodName: string;
    foodPrice: number;
    foodDesc: string;
    quantity: number;

    constructor(id: string, foodPic: string, foodName: string, 
        foodPrice: number, foodDesc: string, quantity: number){
        this.id = id;
        this.foodPic = foodPic;
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.foodDesc = foodDesc;
        this.quantity = quantity;
    }

  
}