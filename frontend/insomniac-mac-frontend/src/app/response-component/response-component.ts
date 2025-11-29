import { Component } from '@angular/core';
import { OrderService } from '../services/order-service';

@Component({
  selector: 'app-response-component',
  imports: [],
  templateUrl: './response-component.html',
  styleUrl: './response-component.css'
})
export class ResponseComponent {

  constructor(public orderService: OrderService){}
  


}
