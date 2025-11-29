import { Order } from "./order-model";

export class Customer{
    id: string | null = null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    order: Order;


    constructor(id: string | null = null, firstName: string, lastName: string, 
         phoneNumber: string, order: Order){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        
        this.phoneNumber = phoneNumber;
        this.order = order;
    }
}