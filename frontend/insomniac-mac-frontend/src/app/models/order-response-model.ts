export class OrderResponse {
    firstName: string;
    lastName: string;
    timeOfOrder: Date;
   message: string
    

    constructor(firstName: string, lastName: string, timeOfOrder: Date, message: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.timeOfOrder = timeOfOrder;
        this.message = message;
    }
}